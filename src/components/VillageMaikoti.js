import React from "react";
import villageImg from "../assets/images/home.jpg"; // replace with real image

const VillageMaikoti = () => (
  <section style={styles.section}>
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>
        Village Spotlight: Maikoti <br />
        <span style={styles.subheading}>Rudraprayag, Uttarakhand</span>
      </h2>
      <div style={styles.content}>
        <div style={styles.imageWrapper}>
          <img src={villageImg} alt="Maikoti Village" style={styles.image} />
        </div>
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
    background: "#eef4f7",
    padding: "60px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    width: "90%",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    color: "#1a1f36",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#444",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
    marginTop: "40px",
  },
  imageWrapper: {
    flex: "1 1 300px",
    maxWidth: "400px",
  },
  image: {
    width: "100%",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    objectFit: "cover",
  },
  info: {
    flex: "1 1 500px",
    fontSize: "16px",
    lineHeight: "1.75",
    color: "#333",
    background: "#ffffffb3",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },
};

export default VillageMaikoti;
