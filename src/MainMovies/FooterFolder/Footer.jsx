import React from "react";
import "./Footer.css";
import { FaFilm, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="movie-footer">
      {/* Waves */}
      <div className="movie-wave wave-back"></div>
      <div className="movie-wave wave-front"></div>

      <div className="footer-container">
        <h2 className="footer-title">
          <FaFilm /> MovieVerse
        </h2>

        <p className="footer-text">
          Discover trending movies, top-rated films, and upcoming releases.
          Dive into a cinematic experience crafted for movie lovers.
        </p>

        <div className="footer-socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <p className="footer-copy">
          © 2025 MovieVerse · All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;