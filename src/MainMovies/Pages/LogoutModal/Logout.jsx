import React from 'react'
import './Logout.css';
const Logout = ({id,setIsFormValid}) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
        <button 
          type="button" 
          className="btn-close X bg-light" 
          data-bs-dismiss="modal" 
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        Are you sure you want to log out? You will be redirected to the login page.
      </div>
      <div className="modal-footer d-flex justify-content-between">
        <button 
          type="button" 
          className="btn btn-outline-danger" 
          data-bs-dismiss="modal"
        >
          Cancel
        </button>
        <button 
          type="button" 
          className="btn btn-outline-danger"
          onClick={() => {
            window.location.href="/";
            setIsFormValid(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Logout