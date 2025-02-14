import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  // State to track the current index of the images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images for the carousel
  const images = [
    '/images/first-image.webp',  // Path to the first image
    '/images/second-image.webp', // Path to the second image
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  // Loop back to the first image
  };

  // Auto-change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      >
        {/* <div className="carousel-overlay">
          <h1>Image Carousel</h1>
        </div> */}
      </div>
      {/* Next/Previous buttons */}
      <button className="carousel-control prev" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
