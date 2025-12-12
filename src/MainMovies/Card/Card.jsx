import React from 'react'
import './Card.css';
const Card = ({ title, poster_path }) => {
  return (
    <div className="card ">
      {/* just for testing -- use backdrop_path instead */}
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} className="card-img" alt="..." />
      <div className="card-gradient"></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default Card