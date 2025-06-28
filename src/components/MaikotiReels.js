import React, { useEffect } from "react";

const reels = [
  {
    title: "Life in Maikoti",
    url: "https://www.instagram.com/reel/CzP3abNMG4H/", // Replace with working public reel
  },
  {
    title: "Scenic Views",
    url: "https://www.instagram.com/reel/Cyx2v9ZrDFk/", // Replace with working public reel
  },
  {
    title: "Cultural Moments",
    url: "https://www.instagram.com/reel/CzSdoJ0IKKd/", // Replace with working public reel
  },
];

const MaikotiReels = () => {
  useEffect(() => {
    // Load Instagram script only once
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => window.instgrm.Embeds.process();
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Maikoti Reels</h2>
      <p style={styles.subtext}>
        Discover Maikoti through Instagram Reels shared by the community.
      </p>
      <div style={styles.grid}>
        {reels.map((reel, idx) => (
          <div key={idx} style={styles.card}>
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={reel.url}
              data-instgrm-version="14"
              style={{ width: "100%", margin: "0 auto" }}
            ></blockquote>
            <h4 style={styles.title}>{reel.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    backgroundColor: "#f5f5fa",
    textAlign: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "15px",
    color: "#666",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "24px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
    padding: "15px",
    width: "330px",
  },
  title: {
    fontSize: "14px",
    marginTop: "10px",
    fontWeight: "500",
    color: "#333",
  },
};

export default MaikotiReels;
