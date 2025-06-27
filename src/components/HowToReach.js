import React from "react";

const HowToReach = () => (
  <section style={styles.section}>
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>🧭 How to Reach Maikoti Village</h2>
      <p style={styles.intro}>
        Maikoti is about <strong>18 km</strong> from Rudraprayag town. You can
        reach it via two routes:
      </p>

      <div style={styles.routes}>
        <div style={styles.routeCard}>
          <div style={styles.icon}>🛣️</div>
          <div>
            <h3 style={styles.title}>Route 1: Via Pokhri Road</h3>
            <p style={styles.text}>
              Directly take the <strong>Rudraprayag–Pokhri road</strong>. It's
              shorter but may be rough in certain stretches.
            </p>
          </div>
        </div>

        <div style={{ ...styles.routeCard, ...styles.preferredCard }}>
          <div style={styles.icon}>✅</div>
          <div>
            <h3 style={styles.title}>
              Route 2: Preferred via Tilwara{" "}
              <span style={styles.badge}>Recommended</span>
            </h3>
            <p style={styles.text}>
              Take the <strong>Kedarnath Highway</strong> from Rudraprayag to{" "}
              <strong>Tilwara</strong>, then turn onto the{" "}
              <strong>Tilwara–Maikoti road</strong>. This route is smoother,
              safer, and more scenic — especially during monsoons.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    background: "#f7fafc",
    padding: "60px 20px",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "34px",
    fontWeight: "bold",
    color: "#1e3a5f",
    marginBottom: "20px",
  },
  intro: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  routes: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  routeCard: {
    background: "#fff",
    borderRadius: "16px",
    padding: "24px",
    flex: "1 1 450px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    transition: "transform 0.3s ease",
  },
  preferredCard: {
    border: "2px solid #1d4ed8",
    background: "linear-gradient(to top, #e0f2fe, #ffffff)",
  },
  icon: {
    fontSize: "28px",
    lineHeight: "1",
    marginTop: "4px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: "10px",
  },
  text: {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6",
  },
  badge: {
    background: "#1d4ed8",
    color: "#fff",
    fontSize: "12px",
    padding: "4px 10px",
    borderRadius: "12px",
    marginLeft: "10px",
    verticalAlign: "middle",
  },
};

export default HowToReach;
