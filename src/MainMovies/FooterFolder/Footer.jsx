import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark-red mt-5">
      <div className="container pb-3 pt-5">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4">
            <img className='mb-3' src="src/assets/side_simplified_600px.png" style={{ width: "75%" }} alt="" />
            <p className="footer-text">
              Discover, search and enjoy the best movies from around the world.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4">
            <h5 className="footer-subtitle">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Top Rated</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h5 className="footer-subtitle">New letters</h5>
            <p className="footer-text">Get movie updates directly in your inbox.</p>
            <div className="justify-content-center">
              <button className="btn btn-outline-danger">Subscribe</button>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="apps">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="" />
          <img src="Google_Play_Store.svg" alt="" />
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <p className="mb-0 footer-copy">
            © 2025 MovieStream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;