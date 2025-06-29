import React from "react";
import villageImg from "../assets/images/home.jpg"; // Use the actual image path

const VillageMaikoti = () => (
  <section style={styles.section}>
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>
        Village Spotlight: Maikoti <br />
        <span style={styles.subheading}>Rudraprayag, Uttarakhand</span>
      </h2>
      <div style={styles.content}>
        {/* Image */}
        <div style={styles.imageWrapper}>
          <img src={villageImg} alt="Maikoti Village" style={styles.image} />
        </div>

        {/* Info Card */}
        <div style={styles.info}>
          <p>
            <strong>📌 Location:</strong> 18 km north of Rudraprayag town along
            NH‑107 in Augustmuni block.
          </p>
          <p>
            <strong>Area:</strong> ~190.5 ha under Maikoti Gram Panchayat.
          </p>
          <p>
            <strong>Cultural Highlight:</strong> Home to Haryali Devi Temple;
            traditional stone‑wood homes & festivals en route to
            Kartik‑Swami/Kedarnath.
          </p>
          <p>
            <strong>Connectivity:</strong> Schools, healthcare & colleges ≈10 km
            away in Rudraprayag / Augustmuni.
          </p>
          <p>
            <strong>PIN Code:</strong> 246448 (Maikoti Post Office).
          </p>
          <p>
            <strong>Population (2011):</strong> 347 (152 ♂, 195 ♀) in 100
            households.
          </p>
          <p>
            <strong>Sex Ratio:</strong> 1,283 ♀ per 1,000 ♂ (State Avg: ~963).
          </p>
          <p>
            <strong>Children (0–6 yrs):</strong> 37 (20 boys, 17 girls); Child
            Sex Ratio ≈ 850.
          </p>
          <p>
            <strong>Literacy Rate:</strong> 84.19% (Female Literacy ~38.3%).
          </p>
          <p>
            <strong>Work Profile:</strong> 179 workers: 170 main (133
            cultivators), 9 marginal.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    background: "linear-gradient(to bottom, #f5f9ff, #e8f0fc)",
    padding: "60px 0",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  wrapper: {
    width: "90%",
    maxWidth: "1200px",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "700",
    textAlign: "center",
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#555",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    marginTop: "40px",
    alignItems: "stretch",
  },
  imageWrapper: {
    flex: "1 1 450px",
    maxWidth: "500px",
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: "520px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
  },
  info: {
    flex: "1 1 450px",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.75",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export default VillageMaikoti;
