// import styles and images
import './Header.scss';

// import react components and hooks
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SITE_LOGO } from '../../util/data';
import SocialMedia from '../SocialMedia/SocialMedia';

function Header() {
  const locationPage = useLocation();
  const { siteImage } = SITE_LOGO[0];
  const [toggle, setToggle] = useState(false);

  function btnToggle() {
    setToggle(isToggled => !isToggled);
  }

  // Function to get the formatted current date
  const getCurrentDate = () => {
    const currentDate = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];

    return { day, date, month };
  };

  const { day, date, month } = getCurrentDate();


  return (
    <header className='navigation-wrapper'>
      <div className='container'>
        <div className='top-navbar'>
          <div className='date-wrapper'>
            <div className='calendar-icon'></div>
            <div className='date-info'>
              <div className='present-day'>{day}</div>
              <div className='present-date'>{`${month} ${date}, ${new Date().getFullYear()}`}</div>
            </div>
          </div>
          <div className='site-logo'>
            <Link to='/'><img src={siteImage} alt="Gnanaveedu react website logo" /></Link>
          </div>
          <div className='social-media-div'>
            <SocialMedia />
          </div>
        </div>
        <div className='main-navigation-wrapper'>
          <ul className='nav-items'>
            <li className={`nav-link home ${locationPage.pathname === '/' ? 'active' : ''}`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`nav-link about ${locationPage.pathname === '/about-us' ? 'active' : ''}`}>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li className={`nav-link service ${locationPage.pathname === '/services' ? 'active' : ''}`}>
              <Link to='/services'>Services</Link>
            </li>
            <li className={`nav-link blog ${locationPage.pathname === '/blogs' ? 'active' : ''}`}>
              <Link to='/blogs'>Blogs</Link>
            </li>
            <li className={`nav-link contact ${locationPage.pathname === '/contact-us' ? 'active' : ''}`}>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
          <div className={`mobile-menu-icon ${toggle ? 'show-menu' : ''}`} onClick={btnToggle}><i className="fa-solid fa-chevron-up"></i></div>
          <div className={`mobile-menu-links ${toggle ? 'show-menu' : ''}`}>
            <div className='mobile-menu-header'>
              <div className='site-logo'>
                <Link to='/'><img src={siteImage} alt="Gnanaveedu react website logo" /></Link>
              </div>
              <div className='social-media-div'>
                <SocialMedia />
              </div>
            </div>
            <div className='quick-links'>
              <h3>Quick Links</h3>
              <ul className='links-wrapper'>
                <li>
                  <Link to='/contact-us'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/terms-and-condition'>Terms and condition</Link>
                </li>
                <li>
                  <Link to='/disclaimer'>Disclaimer</Link>
                </li>
                <li>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;