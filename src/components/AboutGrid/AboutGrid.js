import { Link } from 'react-router-dom';
import './AboutGrid.scss';
import aboutImg from '../../assets/images/about-img.png'

function AboutGrid() {
  return(
    <section className='image-content-wrapper'>
      <div className='container image-grid-column'>
        <div className='image-wrapper'>
          <img src={aboutImg} alt='kapali jyotish kendra' className='relative-img' />
        </div>
        <div className='content-info'>
          <h3>About Us</h3>
          <p>kapali Jyotish Kendra is a portal designed to deliver astrological advice, counseling, suggestions and remedial solutions for various aspects of people’s life, including marriage, relationships, career, finance, health and so on.</p>
          <p>All these services are provided by experienced and authentic astrologer “Siddhantha Kalanidhi” P Sivasubramanian @ Sivasuji.</p>
          <div className='cta-wrapper'>
            <Link to='/about-us' className='btn btn-primary'>Know More</Link>
            <Link to='/services' className='btn btn-secondary'>Explore Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGrid;