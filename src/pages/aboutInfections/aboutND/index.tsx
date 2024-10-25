import React from "react";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import Img1 from "../../../../public/assets/learnmoreND.jpg";
import Image from "next/image";
import { useRouter } from "next/router";

function DiabeticNailDefectsBlog() {
  const router = useRouter();
  const handleDNDdetectClick = () => {
    router.push("../../detections/nailDefects_detection");
  };
  return (
    <div className="flex flex-col min-h-screen mt-20">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Understanding Diabetic Nail Defects
          </h1>
          <Image
            src={Img1}
            alt="Diabetic Nail Defects"
            className="w-full h-[450px] rounded-lg shadow-md mb-6"
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What are Diabetic Nail Defects?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Diabetic nail defects refer to various issues such as fungal infections, nail thickening, discoloration, and brittleness that are common in people with diabetes. These issues often result from poor blood circulation and nerve damage caused by high blood sugar levels.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/6TWwpKKLJV4?rel=0"
              title="Diabetic Nail Defects Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Causes of Diabetic Nail Defects
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The main causes of diabetic nail defects include high blood sugar levels, poor circulation, and weakened immune response. These factors make individuals with diabetes more susceptible to fungal infections and other nail issues.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Symptoms and Appearance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Symptoms include thickened, discolored, or brittle nails that may become painful or develop cracks. Fungal infections can cause the nails to become yellow or brown and may produce an unpleasant odor.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Prevention and Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Proper foot and nail care, maintaining blood sugar levels, and avoiding injuries to the nails are key to preventing diabetic nail defects. Regular inspection and prompt treatment of any issues are essential.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Treatment Options
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Treatment includes antifungal medications, proper foot hygiene, and possibly removing damaged nail parts. Severe cases may require more advanced medical treatments.
          </p>
          <button
            onClick={handleDNDdetectClick}
            className="btn btn-primary"
          >
            Detect Diabetic Nail Infections
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-2 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DiabeticNailDefectsBlog;
