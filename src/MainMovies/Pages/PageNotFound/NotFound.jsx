import React from 'react'
import {useNavigate} from 'react-router-dom'
import './PageNotFound.css';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="page-notfound">
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>
      <div className="content">
        <h1 className="error-code">404</h1>
        <p className="error-message">
          Oops! The page you are looking for does not exist.
        </p>
        <button onClick={()=>navigate('/home')} className="btn btn-outline-danger">
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default NotFound