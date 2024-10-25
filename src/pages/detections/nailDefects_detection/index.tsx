import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";

function Index() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [detections, setDetections] = useState<{ class: string, confidence: number } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      if (selectedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
        setIsUploaded(true);
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const selectedFile = event.dataTransfer.files[0];
      if (selectedFile.type.startsWith("image/")) {
        setImage(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
        setIsUploaded(true);
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById(
      "fileInput"
    ) as HTMLInputElement | null;
    fileInput?.click();
  };

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      const process = Swal.fire({
        title: "Processing...",
        html: '<div class="swal1-spinner" inline-block; width: 3em; height: 3em; border: 0.4em solid #ccc; border-right-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>',
        allowOutsideClick: false,
        showCancelButton: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const response = await axios.post(
          "https://us-central1-diabetes-detection-430811.cloudfunctions.net/nail",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        Swal.close();
        console.log("File uploaded successfully:", response.data);

        if (response.data.error === "Enter a valid Image") {
          Swal.fire('Error..!', 'Enter a valid Image', 'error');
          return;
        }

        // Update detections state with class and confidence
        if (response.data.detections) {
          setDetections({
            class: response.data.detections[0].class,
            confidence: response.data.detections[0].confidence,
          });
        } else {
          setDetections(null);
        }
      } catch (error: unknown) {
        Swal.close();
        console.error("Error uploading file:", error);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while processing the image. Please try again later.',
        });
      }
    }
  };

  const handleClear = () => {
    setImage(null);
    setFile(null);
    setIsUploaded(false);
    setDetections(null);
  };

  const renderOutput = () => {
    if (!detections) return null;

    const { class: detectedClass, confidence } = detections;
    const confidencePercentage = Math.round(confidence * 100);
    const nailClass = detectedClass;

    // Conditional message based on confidence percentage
    const getNonConfidenceMesg = () => {
      if (confidencePercentage >= 90 && confidencePercentage <= 100) {
        return "The system is very confident that your nail does not show signs of diabetes. Keep up the healthy lifestyle and continue routine health check-ups.";
      } else if (confidencePercentage >= 80 && confidencePercentage < 90) {
        return "There is a strong likelihood that you do not have a diabetic condition. Monitoring your health regularly is still recommended.";
      } else if (confidencePercentage >= 75 && confidencePercentage < 80) {
        return "The system suggests a low risk of diabetes-related conditions. Maintaining a healthy routine is advised.";
      } else if (confidencePercentage >= 60 && confidencePercentage < 75) {
        return "The confidence level indicates a moderate chance that you are not at risk for diabetes, though regular check-ups are still a good practice.";
      } else if (confidencePercentage >= 45 && confidencePercentage < 60) {
        return "The system suggests that diabetes is unlikely, but routine health check-ups can provide additional peace of mind.";
      } else if (confidencePercentage < 45) {
        return "The system has low confidence in determining your health condition. Continue monitoring your health, and consult a healthcare professional if you have any concerns.";
      } else {
        return null; // If no message is applicable
      }
    };


        // Conditional message based on confidence percentage
        const getDiabetesConfidenceMesg = () => {
          if (confidencePercentage >= 90 && confidencePercentage <= 100) {
            return "The system is highly confident that your nail shows clear signs of diabetes. Immediate consultation with a healthcare provider is strongly recommended.";
          } else if (confidencePercentage >= 80 && confidencePercentage < 90) {
            return "The system has a strong likelihood that your nail shows signs commonly associated with diabetes. A doctor's appointment is advisable to confirm this and plan next steps.";
          } else if (confidencePercentage >= 75 && confidencePercentage < 80) {
            return "The system detects noticeable signs associated with a diabetic infected nail. Seeking medical advice soon would help to you.";
          } else if (confidencePercentage >= 60 && confidencePercentage < 75) {
            return "The system suggests a moderate probability that your nail has signs that could be linked to diabetes. Further testing by a healthcare provider is recommended for clarity.";
          } else if (confidencePercentage >= 45 && confidencePercentage < 60) {
            return "The system shows moderate confidence in detecting diabetes signs. Some markers suggest potential diabetes, though they're not as distinct. Checking with a doctor could provide reassurance.";
          } else if (confidencePercentage < 45) {
            return "The system is not confident that you have diabetes. However, it's still a good idea to consult a healthcare professional.";
          } else {
            return null; // If no message is applicable
          }
        };

    switch (detectedClass) {
      case "Diabetic_Nail":
        return (
          <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <h2 className="text-lg font-bold mb-4">Detection Results</h2>
            <div className="text-lg font-bold mb-2">
              <span className=" text-green-600 text-xl  mr-4">{nailClass}</span>: <span className=" text-gray-400  text-base">{confidencePercentage}% confidence</span>
            </div>
            <p className="text-red-500  font-semibold mb-2">*The system detects signs of a diabetic-infected nail.</p>
            <div className="text-lg font-bold">Instructions:</div>
            <ul className="list-disc pl-6">
              <li>Reduce foods that contain sugar and sweetness</li>
              <li>Immediately meet your family doctor</li>
              <li>Immediately meet a dermatologist for treatments</li>
              <li>Do a diabetic checkup (FBS - Fasting Blood Sugar)</li>
            </ul>
            <div className="mt-6 text-blue-600 ">
              {getDiabetesConfidenceMesg()}
            </div>
          </div>
        );
      case "Non_Diabetic_Nail":
        return (
          <div className="border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <h2 className="text-lg font-bold mb-4">Detection Results</h2>
            <div className="text-lg font-bold mb-2">
              <span className=" text-green-600 text-xl  mr-4">{nailClass}</span>: <span className=" text-gray-400  text-base">{confidencePercentage}% confidence</span>
            </div>
            <p className="text-base mb-4">
              No specific medicine or nutrition advice needed for a healthy condition.
            </p>
            <div className="mt-6 text-blue-600 ">
              {getNonConfidenceMesg()}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow h-[50vh] pb-10">
        {!isUploaded ? (
          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mt-20 mx-20"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className="mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div className="text-lg text-gray-600">Drag and drop your image here or</div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={handleButtonClick}
            >
              Browse
            </button>
            <br></br>
            <div className="text-lg text-gray-600">to detect Diabetic Nail Infections</div>
            <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center mt-10">
            <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-md mt-16">
              {image && (
                <img
                  src={image}
                  alt="Uploaded preview"
                  className="object-cover w-full h-full"
                />
              )}
              <button
                className="absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Process Image
            </button>
          </div>
        )}
      </div>
      {detections && (
        <div className="flex justify-center mt-8">
          {renderOutput()}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Index;