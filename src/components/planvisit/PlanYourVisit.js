import React from "react";
import { useNavigate } from "react-router-dom";

const PlanYourVisit = () => {
  const navigate = useNavigate();

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Back Button */}
        <button onClick={() => navigate(-1)} style={styles.backButton}>
          ← Back
        </button>

        <h2 style={styles.heading}>Plan Your Visit to Maikoti</h2>
        <p style={styles.subtext}>
          Experience the culture, connect with nature, and enjoy the serenity of
          Maikoti. Whether you're an adventurer, a spiritual seeker, or simply
          someone looking for peace — Maikoti welcomes you.
        </p>

        <div style={styles.infoGrid}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🛕 Nearby Attractions</h3>
            <p>
              Visit Kartik Swami, Haryali Devi Temple, and the picturesque
              Mandakini River trails.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🚗 How to Reach</h3>
            <p>
              18 km north of Rudraprayag on NH-107. Accessible by taxi or shared
              jeep from Augustmuni.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>🏡 Stay Options</h3>
            <p>
              Local homestays offer warm hospitality and home-cooked meals in
              traditional stone-wood houses.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📅 Best Time</h3>
            <p>
              March–June for greenery, Sept–Nov for clear skies and festivals
              like Harela & Kandali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    background: "#f9f9f9",
    padding: "60px 20px",
    color: "#1a1a1a",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  backButton: {
    background: "transparent",
    border: "none",
    color: "#c94b31",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
    textAlign: "left",
    fontWeight: "500",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subtext: {
    fontSize: "16px",
    maxWidth: "800px",
    margin: "0 auto 40px",
    lineHeight: "1.6",
    color: "#444",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  },
};

export default PlanYourVisit;
