import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="input-group">
       <input type="email" className="input" id="Email" name="Email" placeholder="YourMail@gmail.com" />
       <input className="button--submit" value="Subscribe" type="submit"/>
      </div>
      <div className="social-media-container">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook-f" alt="" />
        </a>
        <a href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Pics Search. All rights reserved.</p>
    </footer>
  );
};

export default Footer;