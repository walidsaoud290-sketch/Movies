import React, { useState } from 'react';
import './ModalUser.css';

const ModalUser = ({ id,image ,handleChangeImage}) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">

          <div className="modal-header d-flex flex-column justify-content-center align-items-center">
            <img src={image} className='imageUser rounded-circle mb-3 ' alt="" />
            <button className="btn btn-close X bg-light position-absolute end-0 top-0 m-2" data-bs-dismiss="modal"></button>
          </div>

          <div className="modal-body">
            <div className="input-group mb-3">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
            <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalUser;