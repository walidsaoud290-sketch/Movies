import React from 'react';
import './ModalUser.css';

const ModalUser = ({ id }) => {
  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h1 className="modal-title">Form value</h1>
            <button className="btn btn-close" data-bs-dismiss="modal"></button>
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