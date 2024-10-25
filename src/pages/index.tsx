import React, { useEffect, useState } from "react";
import Nav from "@/components/Header";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "@/components/Footer";
import Image from "next/image";
import image2 from "../../public/assets/doc.jpg";
import image3 from "../../public/assets/accard.jpg";
import image4 from "../../public/assets/dfucard1.webp";
import image5 from "../../public/assets/ndcard.jpg";
import carousel1 from "../../public/assets/carousel1.jpg";
import carousel2 from "../../public/assets/carousel2.jpg";
import carousel3 from "../../public/assets/carousel3.jpg";
import carousel4 from "../../public/assets/carousel4.jpg";
import carousel5 from "../../public/assets/carousel5.jpg";
import Carousel from "@/components/Carousel";
import { useRouter } from "next/router";

function index() {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem("user");
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleANLearnMoreClick = () => {
    router.push("/aboutInfections/aboutAN");
  };
  const handleDFULearnMoreClick = () => {
    router.push("/aboutInfections/aboutDFU");
  };
  const handleNDLearnMoreClick = () => {
    router.push("/aboutInfections/aboutND");
  };

  return (
    <div>
      <Nav />
      <div>
        <Carousel images={images} />
      </div>

      {email && ( // Conditionally render the card container based on email
        <div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={image3}
                alt="Acanthosis Nigricans"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Acanthosis Nigricans</h2>
              <p>Wondering what is Acanthosis Nigricans?</p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleANLearnMoreClick}
                  className="btn btn-primary"
                >
                  Learn More
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
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={image4}
                alt="Foot Ulcer"
                style={{ width: "100%", height: "225px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Diabetic Foot Ulcers</h2>
              <p>Severe Foot Ulcers caused to death. Do you know?</p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleDFULearnMoreClick}
                  className="btn btn-primary"
                >
                  Learn More
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
            </div>
          </div>

          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <Image
                src={image5}
                alt="Nail Defects"
                style={{ width: "100%", height: "225px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Diabetic Nail Defects</h2>
              <p>Having discoloration of Nails, you may have been infected</p>
              <div className="card-actions justify-end">
                <button
                  onClick={handleNDLearnMoreClick}
                  className="btn btn-primary"
                >
                  Learn More
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
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full flex-col lg:flex-row mt-16 mb-16">
        <div className="card rounded-box w-1/2 flex-grow place-items-center mb-4">
          <Image
            src={image2}
            alt="Your Company"
            style={{ width: "400px", height: "auto" }}
          />
        </div>
        <div className="divider lg:divider-horizontal" />
        <div className="card rounded-box w-1/2 h-70 flex-grow  place-items-center  font-poppins mb-10 mr-28 mt-10">
          <p className="text-base  text-justify">
            <strong className="text-xl">Understanding diabetes </strong> is crucial for maintaining your health. This condition affects how your body processes sugar, which can lead to serious complications if not managed properly. Adopting a healthy lifestyle—by eating a balanced diet, engaging in regular physical activity, and monitoring your blood sugar—can significantly reduce your risk. Stay informed about the early signs of diabetes, such as increased thirst and frequent urination, and take proactive measures to protect your health. Early detection and intervention can lead to better outcomes and help prevent long-term complications.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default index;
