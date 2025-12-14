import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-dark-red mt-5">
      <div className="container py-5">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-title"><img src="Logo-nobg.png" style={{width:"50px"}} alt="" /> MovieStream</h3>
            <p className="footer-text">
              Discover, search and enjoy the best movies from around the world.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-subtitle">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Trending</a></li>
              <li><a href="#">Top Rated</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-subtitle">New letters</h5>
            <p className="footer-text">Get movie updates directly in your inbox.</p>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-danger">Subscribe</button>
            </div>
          </div>

        </div>

        <hr className="footer-divider" />

          <div className="apps d-flex gap-3 mb-3 justify-centent-center">
            <div className="app-store">
              <img src="App-store.png" alt="" />
            </div>
            <div className="google-play">
              <img src="Google_Play_Store.svg" alt="" />
            </div>
          </div>
            
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 footer-copy">
            © 2025 MovieZone. All rights reserved.
          </p>

          <div className="footer-social">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;