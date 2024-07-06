import './ContactMap.scss';
import { CONTACT_PAGE } from '../../util/data';

function ContactInfoItem({ contactId, contactIcon, contactTitle, contactDescrip }) {
  return (
    <div className='contact-info-item'>
      <div className='item-icon'>
        { contactIcon }
      </div>
      <div className='item-info'>
        <h4>{ contactTitle }</h4>
        { contactDescrip }
      </div>
    </div>
  );
}

function ContactMap() {
  return(
    <div className='contact-info-wrapper'>
      <div className='container'>
        <div className='contact-header'>
          <span className='content-label'>Contact Us</span>
          <h3>We'd love to hear from you</h3>
        </div>
        <div className='contact-info-list'>
          {CONTACT_PAGE.map((infoItem) => (
            <ContactInfoItem key={infoItem.contactId} {...infoItem} ></ContactInfoItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactMap;