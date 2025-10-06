// components/BannerSlider.js
import React, { useState, useEffect } from 'react';

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  


  const slides = [
    {
      id: 1,
      title: "Discover Your Next Favorite Book",
      subtitle: "Explore thousands of bestsellers, classics, and hidden gems.",
      buttonText: "Browse Books",
      image: "/1.jpg",
      bgColor: "bg-gradient-to-r from-blue-900 to-indigo-800"
    },
    {
      id: 2,
      title: "Join Our Reading Community",
      subtitle: "Share reviews, join discussions, and connect with fellow book lovers.",
      buttonText: "Join Now",
       image: "/2.jpg",
      bgColor: "bg-gradient-to-r from-amber-800 to-orange-700"
    },
    {
      id: 3,
      title: "New Releases Every Week",
      subtitle: "Be the first to read the latest novels from your favorite authors.",
      buttonText: "See New Arrivals",
       image: "/3.jpg",
      bgColor: "bg-gradient-to-r from-teal-800 to-cyan-700"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval); 
  }, []);

  return (
    <section className="relative w-full h-[85vh] max-h-[700px] overflow-hidden">
     
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
      
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

        
          <div className={`absolute inset-0 ${slide.bgColor} opacity-70`}></div>

    
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fadeInUp">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md animate-fadeInUp animation-delay-200">
                {slide.subtitle}
              </p>
              <button className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-xl animate-fadeInUp animation-delay-400">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

    
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full text-white transition"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

   
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full text-white transition"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

   
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default BannerSlider;