import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MAIKOTI</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>Class</li>
        <li style={styles.navItem}>Creation</li>
        <li style={styles.navItem}>FAQ</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: "linear-gradient(to right, #1d2b64, #f8cdda)",
    color: "white",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "30px",
    fontSize: "16px",
    fontWeight: "500",
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: "pointer",
  },
  navActions: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  loginBtn: {
    background: "#222",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  },
};

export default Navbar;
