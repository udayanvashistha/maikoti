import React from "react";
import avatar from "../assets/images/home.jpg"; // Use same image for demo
import sample from "../assets/images/home.jpg";

const photographers = [
  {
    name: "Aarav Singh",
    role: "Nature Specialist",
    avatar: avatar,
    samples: [sample, sample, sample],
  },
  {
    name: "Isha Patel",
    role: "Street Explorer",
    avatar: avatar,
    samples: [sample, sample, sample],
  },
  {
    name: "Kabir Mehra",
    role: "Festival Moments",
    avatar: avatar,
    samples: [sample, sample, sample],
  },
];

const Photographers = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Photographers of the City</h2>
      <div style={styles.grid}>
        {photographers.map((p, idx) => (
          <div key={idx} style={styles.card}>
            <img src={p.avatar} alt={p.name} style={styles.avatar} />
            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.role}>{p.role}</p>
            <div style={styles.samples}>
              {p.samples.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Sample ${i}`}
                  style={styles.thumb}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f8f8fc",
    padding: "60px 20px",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#1a1a1a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.06)",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  name: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "4px",
    color: "#2c3e50",
  },
  role: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "12px",
  },
  samples: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  thumb: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

export default Photographers;
