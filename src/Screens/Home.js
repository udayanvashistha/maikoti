import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import img1 from "../assets//images/village/village1.jpg";
import img2 from "../assets//images/village/village2.jpg";
import img3 from "../assets//images/village/village3.jpg";
import ImageSlider from "../components/ImagesSlider";
import TopLocations from "../components/TopLocations";
import FeaturedMoments from "../components/FeaturedMoments";
import Photographers from "../components/Photographers";
import SeasonsEvents from "../components/SeasonsEvents";
import Footer from "../components/Footer";
import VillageMaikoti from "../components/VillageMaikoti";
import HowToReach from "../components/HowToReach";
import VillageDocumentary from "../components/villgeDocumentary";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section
        style={{
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // cool blue modern gradient
          padding: "60px 20px",
          borderRadius: "0 0 30px 30px", // smooth bottom curve
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "40px",
            textShadow: "0 2px 6px rgba(0,0,0,0.3)",
            fontFamily: "'Segoe UI', sans-serif",
          }}
        >
          Explore Beautiful Moments from Maikoti Village
        </h2>

        <ImageSlider images={[img1, img2, img3]} interval={3000} />
      </section>

      <TopLocations />
      <FeaturedMoments />
      <VillageDocumentary />
      <SeasonsEvents />
      <VillageMaikoti />
      <HowToReach />
      <iframe
        title="Maikoti Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.176423310696!2d78.9925535150776!3d30.288561981777142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39090f457982b9ed%3A0xe0b8e96f26c2aa9!2sMaikoti!5e0!3m2!1sen!2sin!4v1680000000000"
        width="100%"
        height="350"
        style={{ border: 0, borderRadius: "12px", marginTop: "40px" }}
        allowFullScreen=""
        loading="lazy"
      />

      <Footer />
    </div>
  );
};

export default Home;
