import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div style={styles.brand}>
          <h3 style={styles.logo}>CityGallery</h3>
          <p style={styles.text}>
            Discover and celebrate the beauty of our city through photos.
          </p>
        </div>

        <div style={styles.links}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li style={styles.link}>Home</li>
            <li style={styles.link}>Gallery</li>
            <li style={styles.link}>Photographers</li>
            <li style={styles.link}>Contact</li>
          </ul>
        </div>

        <div style={styles.contact}>
          <h4 style={styles.heading}>Contact</h4>
          <p style={styles.text}>📧 hello@citygallery.com</p>
          <p style={styles.text}>📍 YourCity, India</p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()} CityGallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0d1b2a",
    color: "#eee",
    padding: "60px 20px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  brand: {
    flex: "1 1 300px",
    marginBottom: "30px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#f4f4f4",
  },
  text: {
    fontSize: "14px",
    color: "#ccc",
    marginTop: "10px",
  },
  links: {
    flex: "1 1 200px",
    marginBottom: "30px",
  },
  contact: {
    flex: "1 1 200px",
    marginBottom: "30px",
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#fff",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    fontSize: "14px",
    color: "#bbb",
    marginBottom: "8px",
    cursor: "pointer",
  },
  bottom: {
    textAlign: "center",
    borderTop: "1px solid #333",
    marginTop: "30px",
    paddingTop: "15px",
  },
  bottomText: {
    fontSize: "13px",
    color: "#999",
  },
};

export default Footer;
