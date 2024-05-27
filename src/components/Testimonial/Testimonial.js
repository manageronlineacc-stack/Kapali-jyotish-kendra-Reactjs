import './Testimonial.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testiImgOne from '../../assets/images/testi-img-one.jpg';
import testiImgTwo from '../../assets/images/testi-img-two.jpg';
import { TESTIMONIAL_CONT } from '../../util/data';
import Slider from 'react-slick';

function TestimonialItem ({customerFeedback, customerName}) {
  return (
    <div className='testimonial-item'>
      <p>{ customerFeedback }</p>
      <h3 className='customer-name'>{ customerName }</h3>
    </div>
  );
}

function Testimonial() {
  // Settings for React Slick carousel
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='testimonial-wrapper'>
      <div className='container'>
        <div className='section-header'>
          <h3>What People Say About Us</h3>
          <p>Don't take our word for it. See what customers are saying about us.</p>
        </div>
        <div className='testimonial-column'>
          <div className='testi-img-wrapper'>
            <div className='two-column'>
              <div className='testi-img-left'>
                <img src={testiImgOne} className='testi-img' alt='testimonial of kapali jyotish kendra' />
              </div>
              <div className='testi-img-right'>
                <div className='card'>
                  <h3>500+</h3>
                  <p>Satisfed Customers</p>
                </div>
                <div className='testi-img'>
                <img src={testiImgTwo} className='testi-img' alt='testimonial of kapali jyotish kendra' />
                </div>
              </div>
            </div>
          </div>
          <div className='testi-item-carousel'>
            <Slider {...settings}>
            {TESTIMONIAL_CONT.map((testiItem) => (
              <TestimonialItem key={testiItem.id} {...testiItem}></TestimonialItem>
            ) )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;