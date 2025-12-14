import { createContext, useState, useEffect } from 'react';
import './Header.css';
import ModalUser from '../Pages/ModalUser/ModalUser';
import { Link } from 'react-router-dom';

export const context = createContext();

const Header = () => {
  const [image, setImage] = useState(
    'vecteezy_default-profile-account-unknown-icon-black-silhouette_20765399.jpg'
  );

  useEffect(() => {
    const fixScroll = () => {
      document.body.style.paddingRight = '0px';
      document.body.style.overflow = '';
    };

    document.addEventListener('show.bs.dropdown', fixScroll);
    document.addEventListener('shown.bs.dropdown', fixScroll);
    document.addEventListener('hide.bs.dropdown', fixScroll);

    return () => {
      document.removeEventListener('show.bs.dropdown', fixScroll);
      document.removeEventListener('shown.bs.dropdown', fixScroll);
      document.removeEventListener('hide.bs.dropdown', fixScroll);
    };
  }, []);

  return (
    <context.Provider value={{ image, setImage }}>
      <>
        <nav className="navbar nvBarOrigin navbar-expand-lg rounded">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              <img src="logo-nobg.png" style={{ width: '40px' }} alt="" />
            </a>

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
                <li className="nav-item">Home</li>
                <li className="nav-item">Pricing</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
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
                    <li
                      data-bs-toggle="modal"
                      data-bs-target="#modalUser"
                    >
                      <button className="dropdown-item">
                        My profile
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item">Settings</button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item text-danger">
                        Logout
                      </button>
                    </li>
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