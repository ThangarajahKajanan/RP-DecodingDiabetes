import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component for optimized images
import { StaticImageData } from 'next/image';

type CarouselProps = {
  images: StaticImageData[];
};
const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    setSlideDirection("left");
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setSlideDirection("right");
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative mx-auto w-screen h-[70vh] overflow-hidden">
      <div
        className={`flex transition-transform duration-1000 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            <Image src={image} style={{ marginTop: "85px" }} className="w-full h-[60vh] object-cover" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button className="btn btn-circle" onClick={handlePrevClick}>
          ❮
        </button>
        <button className="btn btn-circle" onClick={handleNextClick}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
