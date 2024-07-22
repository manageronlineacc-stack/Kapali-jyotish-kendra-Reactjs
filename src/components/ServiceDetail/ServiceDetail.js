import './ServiceDetail.scss';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_CONT } from '../../util/data';
import { slugify } from '../../util/slugify';

function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES_CONT.find((service) => slugify(service.serviceTitle) === slug);

  if (!service) {
    return (
      <div className='service-detail-wrapper'>
        <div className='container'>Service not found</div>
      </div>
    );
  }

  return (
    <div className='service-detail-wrapper' id={service.id}>
      <div className='container'>
        <div className='detail-header'>
          <div className='service-icon'>
            <img src={service.serviceimg} className='icon-img' alt='service icon' />
          </div>
          <div className='detail-title'>{service.serviceTitle}</div>
        </div>
        <div className='detail-description'>
          {service.serviceDescription}
        </div>
        <Link to={`/book-appointment?service=${encodeURIComponent(service.serviceTitle)}`} className='book-appointment-cta btn btn-primary'>
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetail;
