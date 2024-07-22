// import styling and react content
import { useNavigate } from 'react-router-dom';
import './SearchwithServices.scss';
import { SERVICES_CONT } from '../../util/data';
import { useState } from 'react';
import { slugify } from '../../util/slugify';

// Service Item
function ServiceItem({ serviceTitle, serviceimg, onClick }) {
  return (
    <div className='service-item' onClick={onClick}>
      <div className='service-icon'>
        <img src={serviceimg} className='icon-img' alt='service icon' />
      </div>
      <div className='service-title'>{serviceTitle}</div>
    </div>
  );
}

function SearchwithServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const inputValue = e.target.value.replace(/[^a-zA-Z]/g, ''); // Allow only alphabets
    setSearchQuery(inputValue);
  };

  const filteredServices = SERVICES_CONT.filter((serviceItem) =>
    serviceItem.serviceTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleServiceClick = (service) => {
    // Navigate to the ServiceDetail component using slugified title
    const slugifiedTitle = slugify(service.serviceTitle);
    navigate(`/services/${slugifiedTitle}`);
  };

  return (
    <>
      <div className='search-services-wrapper'>
        <div className='services-grid-wrapper'>
          <div className='container'>
            <div className='title-wrapper'>
              <h3>Looking For</h3>
              <div className='search-input-field'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Search'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className='service-grid'>
              {filteredServices.length === 0 && searchQuery && (
                <div className='no-results'>No services found</div>
              )}
              {filteredServices.map((serviceItem) => (
                <ServiceItem
                  key={serviceItem.id}
                  serviceTitle={serviceItem.serviceTitle}
                  serviceimg={serviceItem.serviceimg}
                  onClick={() => handleServiceClick(serviceItem)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchwithServices;
