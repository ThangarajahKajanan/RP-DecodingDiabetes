import React from "react";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import Img1 from "../../../../public/assets/learnmoreDFU.webp";
import Image from "next/image";
import { useRouter } from "next/router";

function DiabeticFootUlcersBlog() {
  const router = useRouter();
  const handleDFUdetectClick = () => {
    router.push("../../detections/footUlcer_detection");
  };
  return (
    <div className="flex flex-col min-h-screen mt-20">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Understanding Diabetic Foot Ulcers
          </h1>
          <Image
            src={Img1}
            alt="Diabetic Foot Ulcers"
            className="w-full h-[450px] rounded-lg shadow-md mb-6"
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What are Diabetic Foot Ulcers?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Diabetic foot ulcers are open sores or wounds that occur in approximately 15% of patients with diabetes. They are most commonly located on the bottom of the foot. Diabetes can cause poor blood circulation and nerve damage, leading to increased risk for ulcers.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/HV3gnaSKaE0?rel=0"
              title="Diabetic Foot Ulcers Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Causes of Diabetic Foot Ulcers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The primary cause of diabetic foot ulcers is poor blood circulation, nerve damage (neuropathy), and high blood sugar levels. These factors make it difficult for wounds to heal, leading to ulcer formation.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Symptoms and Appearance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Diabetic foot ulcers can appear as a red, sore spot on the skin, which may become infected if not treated. In severe cases, the ulcer can penetrate deep into the tissue, affecting bones and leading to serious complications.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Prevention and Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Prevention involves proper foot care, managing blood sugar levels, and regular check-ups with a healthcare provider. Wearing comfortable shoes, keeping feet clean, and avoiding injuries are key strategies.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Treatment Options
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Treatment includes cleaning and dressing the ulcer, controlling blood sugar levels, and using antibiotics if the ulcer is infected. In severe cases, surgery may be necessary to remove dead tissue or correct deformities.
          </p>
          <button
            onClick={handleDFUdetectClick}
            className="btn btn-primary"
          >
            Detect Diabetic Foot Ulcer
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

export default DiabeticFootUlcersBlog;
