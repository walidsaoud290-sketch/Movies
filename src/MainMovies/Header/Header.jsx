import { createContext, useState } from 'react';
import './Header.css';
import ModalUser from '../Pages/ModalUser/ModalUser';
import { Link } from 'react-router-dom';
export const context = createContext();

const Header = () => {

  const [image, setImage] = useState('vecteezy_default-profile-account-unknown-icon-black-silhouette_20765399.jpg');
  
  return (
    <context.Provider value={{ image, setImage }}>
      <>
        <nav className="navbar nvBarOrigin navbar-expand-lg rounded ">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">MovieShow</a>

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
                <li className='nav-item'>Home</li>
                <li className='nav-item'>Pricing</li>
                <li className='nav-item'>Features</li>
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

                  <ul className="dropdown-menu w-50 row dropdown-menu-end">
                    <li className='col-sm-4' data-bs-toggle="modal" data-bs-target="#modalUser">
                      <button className="dropdown-item" >
                        My profile
                      </button>
                    </li>
                    <li className='col-sm-4 '><button className="dropdown-item">Settings</button></li>
                    <li><hr className="dropdown-divider " /></li>
                    <li className='col-sm-4'><button className="dropdown-item text-danger">Logout</button></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </nav>

        <ModalUser id="modalUser" />
      </>
    </context.Provider>
  );
};

export default Header;