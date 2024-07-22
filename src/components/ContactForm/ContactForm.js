import './ContactForm.scss';
import { useState } from 'react';

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNewResponse = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="success-message">
        <div className='container'>
          <div className='content'>
          <h3>Thank you for your submission!</h3>
          <button onClick={handleNewResponse} className='btn-resubmit'>
            Submit another response
          </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className='contact-form-wrapper'>
      <div className='container'>
        <div className='form-header'>
          <h3>Get in touch</h3>
        </div>
        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title='hidden-iframe' onLoad={handleSubmit}></iframe>
        <form 
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSdHUpN9zvosb8L1B2IcJQBSLngtn54p46yy4oSNWztPWTtwoA/formResponse'
          method='post' 
          target="hidden_iframe"
          className='google-contact-form'
        >
          <div className='form-element'>
            <span className='form-label'>Name</span>
            <input type='text' name='entry.2005620554' className='form-text form-input' required />
          </div>

          <div className='form-element'>
            <span className='form-label'>Phone Number</span>
            <input type='text' name='entry.1166974658' className='form-number form-input' required />
          </div>

          <div className='form-element'>
            <span className='form-label'>Email</span>
            <input type='email' name='entry.1045781291' className='form-email form-input' required />
          </div>

          <div className='form-element'>
            <span className='form-label'>Message</span>
            <textarea name='entry.839337160' className='form-message form-input' required></textarea>
          </div>

          <button type='submit' className='form-submit btn btn-secondary'>Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ContactForm;
