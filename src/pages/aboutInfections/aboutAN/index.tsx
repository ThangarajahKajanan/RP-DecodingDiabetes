import React from "react";
import Nav from "@/components/Header";
import Footer from "@/components/Footer";
import Img1 from "../../../../public/assets/learnmoreAN1.webp";
import Image from "next/image";
import { useRouter } from "next/router";


function AcanthosisNigricansBlog() {
  const router = useRouter();
  const handleANdetectClick = () => {
    router.push("../../detections/acanthosisNigricans_detection");
  };
  return (
    <div className="flex flex-col min-h-screen mt-20">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
            Understanding Diabetic Acanthosis Nigricans in the Neck Area
          </h1>
          <Image
            src={Img1}
            alt="Acanthosis Nigricans"
            className="w-full h-[450px] rounded-lg shadow-md mb-6"
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What is Acanthosis Nigricans?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Acanthosis Nigricans is a skin condition characterized by dark, thick, and velvety patches that commonly appear in the folds and creases of the skin. In people with diabetes, these patches are often found on the neck, armpits, and groin. The condition is usually a sign of insulin resistance, which is a key feature of type 2 diabetes.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/wmWOdcZ7Uc4?rel=0"
              title="Acanthosis Nigricans Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Causes of Acanthosis Nigricans in Diabetics
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            In individuals with diabetes, Acanthosis Nigricans is primarily caused by insulin resistance. When the body becomes resistant to insulin, it produces more insulin to compensate. High levels of insulin in the bloodstream can trigger the rapid growth of skin cells, leading to the thick, dark patches associated with Acanthosis Nigricans.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Symptoms and Appearance
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The neck is one of the most common areas where Acanthosis Nigricans appears in diabetics. The skin may become darker, thicker, and have a velvety texture. These patches can sometimes feel itchy or have an odor, but they are generally not painful.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Prevention and Management
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Preventing Acanthosis Nigricans involves managing the underlying insulin resistance and maintaining healthy blood sugar levels. Here are some key strategies:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4">
            <li>Maintain a balanced diet low in sugars and refined carbohydrates.</li>
            <li>Engage in regular physical activity to improve insulin sensitivity.</li>
            <li>Monitor and manage your blood sugar levels regularly.</li>
            <li>Work with your healthcare provider to manage your diabetes effectively.</li>
          </ul>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Treatment Options
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            While Acanthosis Nigricans itself is not dangerous, it is a sign that you need to address the underlying condition causing it. Treatment focuses on managing insulin resistance and improving the appearance of the affected skin. Here are some common treatment options:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4">
            <li><strong>Topical treatments:</strong> Creams containing ingredients like retinoids or vitamin D can help lighten the skin and reduce thickness.</li>
            <li><strong>Oral medications:</strong> In some cases, medications that improve insulin sensitivity, such as metformin, may be prescribed.</li>
            <li><strong>Weight management:</strong> Losing weight can significantly reduce insulin resistance and improve skin condition.</li>
            <li><strong>Laser therapy:</strong> Laser treatments may be used to reduce the thickness and darkness of the patches.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            It's important to consult with a healthcare provider for a personalized treatment plan. Addressing the underlying cause of Acanthosis Nigricans is crucial for both skin health and overall well-being.
          </p>
          <button
            onClick={handleANdetectClick}
            className="btn btn-primary"
          >
            Detect Acanthosis Nigricans
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

export default AcanthosisNigricansBlog;
