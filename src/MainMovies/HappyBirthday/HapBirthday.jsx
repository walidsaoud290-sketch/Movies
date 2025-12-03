import React, { useEffect } from 'react';
import './HapBirthday.css';

const HapBirthday = ({ user, setIsClosed }) => {

  useEffect(() => {
    const confettiInterval = setInterval(createConfetti, 150);

    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = (Math.random() * 2 + 3) + "s";
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }

    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div className="birthday-bg">
      <div className="balloons">
        <div className="balloon b1"></div>
        <div className="balloon b2"></div>
        <div className="balloon b3"></div>
      </div>

      <div className="birthday-card bg-dark ">
        <h2 className="birthday-title">🎉 Happy Birthday, {user}! 🎉</h2>

        <p className="birthday-text text-white">
          Today is a special day — a moment to celebrate your journey, your achievements, 
          and everything that makes you unique.  
          May this new year of your life bring joy, success, and unforgettable memories.  
          Enjoy your day to the fullest! 🎂✨
        </p>

        <button className="birthday-btn" onClick={() => setIsClosed(true)}>
          Thank You 
        </button>
      </div>
    </div>
  );
};

export default HapBirthday;