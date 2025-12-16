import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100); // trigger animation
  }, []);

  return (
    <section className="about-section">
      <div className={`about-container ${show ? 'show' : ''}`}>
        <img style={{width:"100px"}} src="src/assets/logo_simplified_389px.png" alt="" />
        <h2>About MovieStream Project</h2>
        <p>
          Welcome to MovieStream! We bring you the latest movies, trailers, and exclusive content.
          Dive into the world of cinema with curated recommendations and discover hidden gems.
        </p>
        <p>
          Our mission is to make movie exploration exciting and interactive, whether you’re a casual
          viewer or a cinephile.
        </p>
      </div>
    </section>
  );
};

export default About;