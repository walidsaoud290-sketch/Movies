import React, { useState } from 'react';
import './Header.css';
import ModalUser from '../Pages/ModalUser/ModalUser';

const Header = () => {
  const [image,setImage] = useState('vecteezy_default-profile-account-unknown-icon-black-silhouette_20765399.jpg');
  const handleChangeImage = ()=>{
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview image
    }
  };
  }
  return (
    <>
      <nav className="navbar nvBarOrigin navbar-expand-lg rounded navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">MovieShow</a>

          <button 
            className="navbar-toggler bg-white" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse my-6" id="navbarNav">

            <ul className="navbar-nav nv">
              <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#">Pricing</a></li>
            </ul>

            <div className="navbar-nav ms-auto">
              <div className="nav-item dropdown">
                <a 
                  className="nav-link d-flex align-items-center" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                >
                  <img 
                    src={image}
                    alt="Avatar"
                    width="40"
                    height="40"
                    className="rounded-circle me-2"
                  />
                </a>

                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button 
                      className="dropdown-item" 
                      data-bs-toggle="modal" 
                      data-bs-target="#modalUser"
                    >
                      My profile
                    </button>
                  </li>

                  <li><button className="dropdown-item">Settings</button></li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button className="dropdown-item text-danger">Logout</button>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Render modal OUTSIDE the dropdown */}
      <ModalUser id="modalUser" image={image} handleChangeImage={handleChangeImage}/>
    </>
  );
}

export default Header;