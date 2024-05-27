import { Link } from 'react-router-dom';
import './ImageContent.scss';

function ImageContent () {
  return (
    <div className='imagecontent-wrapper'>
      <div className='container'>
        <div className='image-wrapper'>

        </div>
        <div className='content-wrapper'>
          <span className='content-label'>Kapali Jyotish Kendra</span>
          <h3>Swamy Sivasuji</h3>
          <p>Swamy Sivasuji is a post graduate in philosophy and well versed in saiva siddhantha. Moreover has great expertise in Vedic astrology and Vedic Numerology. He was born in a traditional Saivite family in Tirunelveli district, Tamil Nadu. At the age of 17, he started his journey of Astrology and Spirituality. He learned vedic astrology from Renowned Scholar "Balajosiyar" Vidwan V Lakshmanan and “Mei Gnana Vallal” K Vaidhiyanadha Eesana Desigar. He has also trained by Nandhi Adigal in decoding Karma in horoscope.</p>
          <p>Swamy Sivasuji has more than 20 years of experience in astrology. He has performed accurate readings of horoscopes and marriage matchings. Apart from being a Vedic Astrologer, he is also a Saiva Siddhantha Vidya Guru in Thiruvavaduthurai Adheenam, Tamil Nadu.</p>
          <p>His knowledge in Vedic Astrology and Saiva Siddhantha has helped many people to attain a clarity in life and to lead their lives with peace and harmony.</p>

          <p>Sivasuji says, “Superficial acts are not powerful enough to change any dosha or planetary position in the chart, whether negative or positive. So, the prediction of an astrologer should always be Karmic based and not remedies based.”</p>

          <p>Let us all cleanse our karmas and get enlightened by God's grace and his guidance!</p>

          <p>Sivaya nama</p>
          <div className='cta-wrapper'>
            <Link to='/services' className='btn btn-secondary'>Explore Our Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;