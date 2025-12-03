import React, { useRef, useContext } from 'react';
import './ModalUser.css';
import { context } from '../../Header/Header';

const ModalUser = ({ id }) => {
  const { image, setImage } = useContext(context);
  const fileInputRef = useRef();

  const handleSelectImage = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content bg-dark">

          <div className="modal-header d-flex flex-column justify-content-center align-items-center">
            <img 
              src={image}
              onClick={handleSelectImage}
              className="imageUser rounded-circle mb-3" 
              alt="user"
              role="button"
            />

            <input 
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              type="file"
              style={{ display: "none" }}
            />

            <button 
              className="btn btn-close X bg-light position-absolute end-0 top-0 m-2" 
              data-bs-dismiss="modal">
            </button>
          </div>

          <div className="modal-body">
            <div className="form-floating mb-3">
                    <input  type="text" className="form-control rounded-3" id="floatingInput" placeholder="userName" />
                    <label for="floatingInput">Username</label>
                    {false && <p className='text-danger'></p>}
                </div>

          </div>

          <div className="modal-footer">
            <button className="btn btn-light text-dark" data-bs-dismiss="modal">Submit</button>
            <button className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalUser;