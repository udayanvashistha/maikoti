import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>Maikoti Gallery</h3>
          <p style={styles.text}>
            Preserving the charm of Maikoti village through stunning visuals and
            local stories. Celebrate the spirit of Uttarakhand with us.
          </p>
        </div>

        <div style={styles.links}>
          <h4 style={styles.heading}>Explore</h4>
          <ul style={styles.linkList}>
            <li style={styles.link}>Home</li>
            <li style={styles.link}>Top Locations</li>
            <li style={styles.link}>Photographers</li>
            <li style={styles.link}>Village Info</li>
          </ul>
        </div>

        <div style={styles.contact}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>📧 contact@maikotiview.com</p>
          <p style={styles.text}>📍 Maikoti, Rudraprayag, Uttarakhand</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} Maikoti Gallery • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0e1b2a",
    color: "#eee",
    padding: "60px 20px 30px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brand: {
    flex: "1 1 300px",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "bold",
    color: "#ffe94d",
    marginBottom: "10px",
  },
  text: {
    fontSize: "15px",
    color: "#ccc",
    lineHeight: 1.6,
  },
  links: {
    flex: "1 1 180px",
  },
  contact: {
    flex: "1 1 240px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#fff",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    fontSize: "15px",
    color: "#bbb",
    marginBottom: "8px",
    cursor: "pointer",
    transition: "color 0.2s",
  },
  bottom: {
    textAlign: "center",
    borderTop: "1px solid #333",
    marginTop: "40px",
    paddingTop: "20px",
  },
  bottomText: {
    fontSize: "14px",
    color: "#888",
  },
};

export default Footer;
