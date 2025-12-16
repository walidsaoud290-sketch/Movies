import React from 'react'
import './Presentation.css'
const Presentation = ({etat}) => {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center flex-column presentation-container p-3'>
      <img style={{width:"300px"}} src="/src/assets/side_simplified_600px.png" alt="" />
      <br />
          <h4 className="text-white typewriter">Welcome to movies watch and enjoy </h4>
          <p>
          Dive into a world of limitless entertainment. Watch blockbuster movies, follow epic series, explore exclusive releases, and enjoy personalized suggestions crafted just for you. Your next adventure begins the moment you press play.
          </p>
    </div>
          
    </>
  )
}

export default Presentation