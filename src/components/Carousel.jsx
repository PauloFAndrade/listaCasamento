import React, { useState, useEffect, useRef } from 'react';

const images = [
  { src: '/images/carrossel01.jpeg', alt: 'Image 1' },
  { src: '/images/carrossel02.jpeg', alt: 'Image 2' },
  { src: '/images/carrossel03.jpeg', alt: 'Image 3' },
  { src: '/images/carrossel04.jpeg', alt: 'Image 4' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mt-4 overflow-hidden">
      <div className="flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2">‹</button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 px-4 py-2">›</button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${currentIndex === idx ? 'bg-gray-800' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;