import React, { useState, useEffect, useCallback } from "react";

function ImageCarousel({ images, alt, darkMode, containIndices = [], size = "default" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalImages = images.length;

  // Auto-slide every 4 seconds, pause on hover
  useEffect(() => {
    if (totalImages <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalImages, isHovered]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Only one image — no carousel needed
  if (totalImages <= 1) {
    const isLarge = size === "large";
    const isContain = true;
    return (
      <div className={`carousel-container ${size === "large" ? "carousel-container-large" : ""} bg-black overflow-hidden relative rounded-xl`}>
        {isContain && (
          <img
            src={images[0]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 scale-125 pointer-events-none"
            aria-hidden="true"
          />
        )}
        <img
          className="carousel-image relative z-10"
          style={{
            objectFit: isContain ? "contain" : "cover",
          }}
          src={images[0]}
          alt={alt}
        />
      </div>
    );
  }

  return (
    <div
      className={`carousel-container ${size === "large" ? "carousel-container-large" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image wrapper */}
      <div className="carousel-viewport bg-black rounded-xl overflow-hidden relative">
        {images.map((img, index) => {
          const isLarge = size === "large";
          const isContain = true;
          const isActive = index === currentIndex;

          return (
            <React.Fragment key={index}>
              {/* Blurred background image if contain */}
              {isContain && (
                <img
                  src={img}
                  alt=""
                  className={`carousel-image blur-2xl scale-125 object-cover pointer-events-none transition-opacity duration-700 ${isActive ? "opacity-60 z-0" : "opacity-0 -z-10"
                    }`}
                  aria-hidden="true"
                />
              )}
              {/* Main image */}
              <img
                className={`carousel-image ${isActive ? "carousel-active" : "carousel-hidden"}`}
                style={{
                  objectFit: isContain ? "contain" : "cover",
                  backgroundColor: "transparent",
                  zIndex: isActive ? 10 : 5
                }}
                src={img}
                alt={`${alt} - ${index + 1}`}
              />
            </React.Fragment>
          );
        })}
      </div>

      {/* Arrow Left */}
      <button
        className={`carousel-arrow carousel-arrow-left ${isHovered ? "carousel-arrow-visible" : ""}`}
        onClick={goToPrev}
        aria-label="Previous image"
        style={{
          backgroundColor: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.35)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Arrow Right */}
      <button
        className={`carousel-arrow carousel-arrow-right ${isHovered ? "carousel-arrow-visible" : ""}`}
        onClick={goToNext}
        aria-label="Next image"
        style={{
          backgroundColor: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.35)",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div
        className="carousel-counter"
        style={{
          backgroundColor: darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.45)",
        }}
      >
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
}

export default ImageCarousel;
