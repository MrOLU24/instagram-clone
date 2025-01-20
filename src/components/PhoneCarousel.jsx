import { useState, useEffect } from "react";

const PhoneCarousel = () => {
  const images = [
    "/src/assets/firstphone.png",
    "/src/assets/secondphone.png",
    "/src/assets/thirdphone.png",
    "/src/assets/swipeimage.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-[290px] h-[600px] border-8 border-black rounded-2xl overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-[300px] h-[600px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneCarousel;
