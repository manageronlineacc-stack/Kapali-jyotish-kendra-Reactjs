import './HeroBanner.scss';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return(
    <div className='hero-banner-wrapper'>
      <div className='container'>
        <div className='banner-content'>
          <h3>A righteous astrologer is able to foresee more than anyone, therefore, he is known as "Daivagna".</h3>
          <div className='cta-wrapper'>
            <Link to='/services' className='btn btn-primary'>Explore Our Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;