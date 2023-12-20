import React from 'react';
import '../css/footer.css'; // CSS file for footer styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>About Us</h5>
            <p>Description about your organization or website.</p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-12">
            <p className="text-center">Your Company Name &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
