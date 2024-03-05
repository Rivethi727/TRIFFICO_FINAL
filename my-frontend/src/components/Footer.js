import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url('./assets/images/footer-bg.png')` }}>
      <div className="container">
        <div className="footer-top">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Top destination</p>
            </li>
            <li>
              <a href="#" className="footer-link">Indonesia, Jakarta</a>
            </li>
            <li>
              <a href="#" className="footer-link">Maldives, Malé</a>
            </li>
            <li>
              <a href="#" className="footer-link">Australia, Canberra</a>
            </li>
            <li>
              <a href="#" className="footer-link">Thailand, Bangkok</a>
            </li>
            <li>
              <a href="#" className="footer-link">Morocco, Rabat</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Categories</p>
            </li>
            <li>
              <a href="#" className="footer-link">Travel</a>
            </li>
            <li>
              <a href="#" className="footer-link">Lifestyle</a>
            </li>
            <li>
              <a href="#" className="footer-link">Fashion</a>
            </li>
            <li>
              <a href="#" className="footer-link">Education</a>
            </li>
            <li>
              <a href="#" className="footer-link">Food & Drink</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Quick links</p>
            </li>
            <li>
              <a href="#" className="footer-link">About</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact</a>
            </li>
            <li>
              <a href="#" className="footer-link">Tours</a>
            </li>
            <li>
              <a href="#" className="footer-link">Booking</a>
            </li>
            <li>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Get a newsletter</p>
            <p className="newsletter-text">For the latest deals and tips, travel no further than your inbox</p>
            <form action="" className="newsletter-form">
              <input type="email" name="email" required placeholder="Email address" className="newsletter-input" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#" className="logo">TRIFFICO</a>
          <p className="copyright">
            &copy; 2022 <a href="#" className="copyright-link"></a>. All Rights Reserved
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-google"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
