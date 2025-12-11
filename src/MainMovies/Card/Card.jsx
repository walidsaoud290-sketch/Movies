import React from 'react'
import './Card.css';
const Card = ({title,backdrop_path,release_date}) => {
  return (
    <div className="card " style={{ width: "18rem" }}>
      <img src={backdrop_path} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{release_date}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card