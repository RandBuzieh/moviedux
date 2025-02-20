import React from "react";
import "../styles.css";

export default function Footer() {
  const crruentYear = new Date().getFullYear();
  return <footer className="footer">
    <p className="footer-text">© {crruentYear} Moviedux, All rights reserved</p>
  </footer>;
}
 