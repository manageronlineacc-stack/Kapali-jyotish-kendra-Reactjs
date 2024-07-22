import './Footer.scss';
import { SITE_LOGO } from '../../util/data';
import { Link } from 'react-router-dom';

function Footer() {
  const { siteImage } = SITE_LOGO[0];
  return (
    <footer className='footer-wrapper'>
      <div className='footer-top container'>
        <div className='footer-logo'>
          <Link to='/'><img src={siteImage} alt="Gnanaveedu react website logo" /></Link>
        </div>
        <div className='useful-links'>
          <h3>Usefull Links</h3>
          <ul className='footer-link-wrapper'>
            <li className='nav-link'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav-link'>
              <Link to='/about-us'>About</Link>
            </li>
            <li className='nav-link'>
              <Link to='/services'>Services</Link>
            </li>
            <li className='nav-link'>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className='nav-link'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='useful-links'>
          <h3>Our Policies</h3>
          <ul className='footer-link-wrapper'>
            <li>
              <Link to='/terms-and-condition'>Terms and Condition</Link>
              <Link to='/disclaimer'>Disclaimer</Link>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom container'>
        <p>Copyright 2024 Kapali Jyotish Kendra. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;