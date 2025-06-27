import React, { useEffect, useRef } from "react";

const ImageSlider = ({ images = [], interval = 3000 }) => {
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || images.length === 0) return;

    const scrollToNext = () => {
      indexRef.current = (indexRef.current + 1) % images.length;
      slider.scrollTo({
        left: slider.clientWidth * indexRef.current,
        behavior: "smooth",
      });
    };

    const autoScroll = setInterval(scrollToNext, interval);
    return () => clearInterval(autoScroll);
  }, [images, interval]);

  return (
    <div style={styles.container}>
      <div style={styles.slider} ref={sliderRef}>
        {images.map((src, idx) => (
          <div key={idx} style={styles.slide}>
            <img src={src} alt={`Slide ${idx}`} style={styles.image} />
            <div style={styles.overlay}>
              <h2 style={styles.overlayText}>Captured Beauty #{idx + 1}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    borderRadius: "12px",
  },
  slider: {
    display: "flex",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  slide: {
    flex: "0 0 100%",
    scrollSnapAlign: "start",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, rgba(0, 0, 0, 0.6) 20%, rgba(0,0,0,0) 70%)",
    display: "flex",
    alignItems: "flex-end",
    padding: "30px",
    boxSizing: "border-box",
  },
  overlayText: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "bold",
    margin: 0,
  },
};

export default ImageSlider;
