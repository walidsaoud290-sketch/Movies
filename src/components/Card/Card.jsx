import React from 'react'
import './Card.css';

const Card = ({ title, id }) => {
  const poster_path = `https://img.cdno.my.id/thumb/w_312/h_468/${id}.jpg`;

  return (
    <a className="card">
      {/* The Glow Element - Duplicates the image source */}
      <img src={poster_path} className="card-glow" alt="" aria-hidden="true" />

      {/* The Main Content */}
      <img src={poster_path} className="card-img" alt={title} />
      <div className="card-gradient"></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </a>
  )
}

export default Card