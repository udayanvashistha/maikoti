import React from "react";

const InfoCard = () => {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>Info</h4>
      <ul style={styles.list}>
        <li>
          <strong>Student:</strong> 24K
        </li>
        <li>
          <strong>Materials:</strong> 600+
        </li>
        <li>
          <strong>Qty. Class:</strong> 24
        </li>
        <li>
          <strong>Mentors:</strong> 48
        </li>
      </ul>
    </div>
  );
};

const styles = {
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "15px",
    color: "white",
    marginTop: "50px",
    width: "200px",
  },
  title: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "yellow",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "14px",
  },
};

export default InfoCard;
