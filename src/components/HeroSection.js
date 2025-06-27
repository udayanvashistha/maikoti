import React from "react";
import img1 from "../assets/images/home.jpg";
import img2 from "../assets/images/home.jpg";
import img3 from "../assets/images/home.jpg";
import img4 from "../assets/images/home.jpg";
import img5 from "../assets/images/home.jpg";
import img6 from "../assets/images/home.jpg";

const HeroSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Content */}
        <div style={styles.left}>
          <h1 style={styles.heading}>
            Rediscover{" "}
            <span style={styles.highlight}>Culture & Creativity</span>
            <br />
            in the Heart of the Himalayas
          </h1>
          <p style={styles.desc}>
            Journey to Maikoti — where nature’s beauty meets traditional wisdom.
            Explore local art, stories, and people that inspire unforgettable
            experiences.
          </p>
          <div style={styles.buttonRow}>
            <button style={styles.primary}>Plan Your Visit</button>
            <button style={styles.secondary}>Know the People</button>
          </div>
        </div>

        {/* Right Circular Images */}
        <div style={styles.right}>
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              style={{
                ...styles.imageWrapper,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <img src={img} alt={`Visual ${index + 1}`} style={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const floatKeyframes = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

// Inject animation into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(floatKeyframes, styleSheet.cssRules.length);

const styles = {
  section: {
    background: "linear-gradient(135deg, #2e2f46, #c94b31)",
    color: "#fff",
    padding: "60px 20px",
    overflowX: "hidden",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "30px",
  },
  left: {
    flex: "1 1 500px",
    padding: "20px",
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 48px)",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "20px",
  },
  highlight: {
    color: "#ffe94d",
  },
  desc: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "30px",
    color: "#e0e0e0",
  },
  buttonRow: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  primary: {
    backgroundColor: "#ffe94d",
    color: "#1a1a1a",
    padding: "14px 28px",
    borderRadius: "30px",
    fontWeight: 600,
    border: "none",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: "14px 28px",
    border: "2px solid #fff",
    borderRadius: "30px",
    fontWeight: 600,
    cursor: "pointer",
  },
  right: {
    flex: "1 1 100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "10px",
    justifyItems: "center",
    padding: "20px",
  },
  imageWrapper: {
    width: "clamp(100px, 25vw, 160px)",
    height: "clamp(100px, 25vw, 160px)",
    borderRadius: "50%",
    overflow: "hidden",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    animation: "float 3s ease-in-out infinite",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
};

export default HeroSection;
