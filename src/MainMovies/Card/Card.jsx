import React from 'react'
import './Card.css';
import { CircleLoader } from 'react-spinners';
const Card = ({ title, backdrop_path, release_date }) => {
  return (
    <div className="card ">
      {/* just for testing -- use backdrop_path instead */}
      <img src="https://img.cdno.my.id/thumb/w_171/h_257/a-house-of-dynamite-1630860058.jpg" className="card-img" alt="..." />
      <div className="card-gradient"></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  )
}

export default Card