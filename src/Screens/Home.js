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
import NewsSection from "../components/NewsSection";

const Home = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Village Showcase Section */}
      <section style={styles.showcaseSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionBadge}>
              🌄 Mountain Heritage
            </span>
            <h2 style={styles.sectionTitle}>
              Discover the Beauty of <span className="gradient-text-fallback" style={styles.titleHighlight}>Maikoti Village</span>
            </h2>
            <p style={styles.sectionDescription}>
              Experience the timeless charm of our Himalayan village through these breathtaking moments
            </p>
          </div>
          
          <div style={styles.sliderContainer}>
            <ImageSlider images={[img1, img2, img3]} interval={3000} />
          </div>
        </div>
      </section>

      {/* Top Locations */}
      <TopLocations />
      
      {/* Featured Moments */}
      <FeaturedMoments />
      
      {/* Village Documentary */}
      <VillageDocumentary />
      
      {/* Seasons & Events */}
      <SeasonsEvents />
      
      {/* News Section */}
      <NewsSection />
      
      {/* Village Information */}
      <VillageMaikoti />
      
      {/* How to Reach */}
      <HowToReach />
      
      {/* Interactive Map Section */}
      <section style={styles.mapSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.mapHeader}>
            <h2 style={styles.mapTitle}>Find Your Way to Maikoti</h2>
            <p style={styles.mapDescription}>
              Located in the heart of the Himalayas, Maikoti is easily accessible and waiting to welcome you
            </p>
          </div>
          
          <div style={styles.mapContainer}>
            <iframe
              title="Maikoti Village Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.176423310696!2d78.9925535150776!3d30.288561981777142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39090f457982b9ed%3A0xe0b8e96f26c2aa9!2sMaikoti!5e0!3m2!1sen!2sin!4v1680000000000"
              width="100%"
              height="400"
              style={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "var(--gray-50)",
  },
  showcaseSection: {
    padding: "var(--space-24) 0",
    background: "linear-gradient(135deg, var(--primary-50) 0%, var(--secondary-50) 100%)",
    position: "relative",
    overflow: "hidden",
  },
  sectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 var(--space-4)",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "var(--space-16)",
    maxWidth: "800px",
    margin: "0 auto var(--space-16)",
  },
  sectionBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "var(--space-2)",
    background: "var(--gradient-primary)",
    color: "white",
    padding: "var(--space-2) var(--space-4)",
    borderRadius: "var(--radius-full)",
    fontSize: "var(--text-sm)",
    fontWeight: "600",
    marginBottom: "var(--space-4)",
    boxShadow: "var(--shadow-md)",
  },
  sectionTitle: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: "800",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
    lineHeight: "1.2",
  },
  titleHighlight: {
    background: "var(--gradient-primary)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sectionDescription: {
    fontSize: "var(--text-lg)",
    color: "var(--gray-600)",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "0 auto",
  },
  sliderContainer: {
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-2xl)",
    background: "white",
    padding: "var(--space-2)",
  },
  mapSection: {
    padding: "var(--space-24) 0",
    background: "var(--gray-100)",
  },
  mapHeader: {
    textAlign: "center",
    marginBottom: "var(--space-12)",
  },
  mapTitle: {
    fontSize: "var(--text-4xl)",
    fontWeight: "800",
    color: "var(--gray-900)",
    marginBottom: "var(--space-4)",
    fontFamily: "var(--font-family-serif)",
  },
  mapDescription: {
    fontSize: "var(--text-lg)",
    color: "var(--gray-600)",
    maxWidth: "500px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  mapContainer: {
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-xl)",
    background: "white",
    padding: "var(--space-3)",
  },
  map: {
    border: 0,
    borderRadius: "var(--radius-xl)",
    width: "100%",
    display: "block",
  },
};

export default Home;
