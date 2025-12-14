import React from 'react'
import './Card.css';

const Card = ({ title, poster_path }) => {
  return (
    <div className="card">
      {/* The Glow Element - Duplicates the image source */}
      <img src={poster_path} className="card-glow" alt="" aria-hidden="true" />

      {/* The Main Content */}
      <img src={poster_path} className="card-img" alt={title} />
      <div className="card-gradient"></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default Card