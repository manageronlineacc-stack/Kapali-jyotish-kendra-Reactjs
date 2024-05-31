import './ServiceForm.scss';
import { useState } from 'react';

function ServiceForm() {
  const [selectedService, setSelectedService] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setSelectedService(value);

    if (value === '') {
      setServiceError('Please select a service.');
    } else {
      setServiceError('');
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNewResponse = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className='appointment-form-wrapper'>
        <div className='container'>
          <div className='two-column'>
            <div className='img-content'>
            </div>
            <div className="success-message">
                <div className='content'>
                <h3>Thank you for your submission!</h3>
                <button onClick={handleNewResponse} className='btn-resubmit'>
                  Submit another response
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='appointment-form-wrapper'>
      <div className='container'>
        <div className='form-header'>
          <h3>Book your service now!</h3>
        </div>
        <div className='two-column'>
          <div className='img-content'>
          </div>
          <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title='hidden-iframe' onLoad={handleSubmit}></iframe>
          <form
            action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSesQfEBs4U5-o47_hLVJ6y0NJJDMGCBtb6kkPDx9Hijsu28UQ/formResponse'
            method='post'
            target="hidden_iframe"
            className='google-service-form'
          >
            <div className='form-element form-select-service'>
              <span className='form-label'>Select Service</span>
              <select name='entry.1854023724' className={`form-input ${serviceError ? 'error' : ''}`} value={selectedService} onChange={handleServiceChange}>
                <option value="">Choose your service</option>
                <option value="Marriage Compatibility">Marriage Compatibility</option>
                <option value="Marriage Consultation">Marriage Consultation</option>
                <option value="Career Consultation">Career Consultation</option>
                <option value="Business Consultation">Business Consultation</option>
                <option value="Health Consultation">Health Consultation</option>
                <option value="Education Guidance">Education Guidance</option>
                <option value="Spiritual Coaching">Spiritual Coaching</option>
                <option value="Child Birth Analysis">Child Birth Analysis</option>
                <option value="Love Life Consultation">Love Life Consultation</option>
                <option value="Past Karma Analysis">Past Karma Analysis</option>
                <option value="Annual Prediction">Annual Prediction</option>
              </select>
              {serviceError && <div className="error-message">{serviceError}</div>}
            </div>
            {(selectedService !== '') ? (
              <>
              <div className='form-element'>
                <span className='form-label'>Name</span>
                <input type='text' name='entry.2107416055' className='form-input' />
              </div>
              <div className='form-element'>
                <span className='form-label'>Gender</span>
                <select name='entry.1470337189' className='form-input'>
                  <option value=''>Choose your gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                </select>
              </div>
              <div className='form-element'>
                <span className='form-label'>Date of Birth</span>
                <input type='date' name='entry.996344890' className='form-input'  />
              </div>
              <div className='form-element'>
                <span className='form-label'>Time of Birth</span>
                <input type='time' name='entry.653549726' className='form-input' />
              </div>
              <div className='form-element'>
                <span className='form-label'>Place of Birth</span>
                <input type='text' name='entry.70563675' className='form-input' />
              </div>
              </>
            ) : null }

            {(selectedService === 'Marriage Compatibility' || selectedService === 'Marriage Consultation') ? (
              <>
                <div className='form-element'>
                  <span className='form-label'>Partner Name</span>
                  <input type='text' name='entry.613474366' className='form-input' />
                </div>
                <div className='form-element'>
                  <span className='form-label'>Partner Gender</span>
                  <select name='entry.263003308' className='form-input'>
                    <option value=''>Choose your gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </select>
                </div>
                <div className='form-element'>
                  <span className='form-label'>Partner Date of Birth</span>
                  <input type='date' name='entry.121959930' className='form-input' />
                </div>
                <div className='form-element'>
                  <span className='form-label'>Partner Time of Birth</span>
                  <input type='time' name='entry.1281858159' className='form-input' />
                </div>
                <div className='form-element'>
                  <span className='form-label'>Partner Place of Birth</span>
                  <input type='text' name='entry.2103237319' className='form-input' />
                </div>
              </>
            ): null}

            {(selectedService !== '') ? (
              <>
                <div className='form-element'>
                  <span className='form-label'>Phone Number</span>
                  <input type='text' name='entry.857542767' className='form-input' />
                </div>
                <div className='form-element'>
                  <span className='form-label'>Email</span>
                  <input type='email' name='entry.121664808' className='form-input' />
                </div>
                <div className='form-element'>
                  <span className='form-label'>Message</span>
                  <textarea name='entry.2146597286' className='form-input'></textarea>
                </div>
                <div className='form-element'>
                <input type="checkbox" id="agreed" name="agreed" value="" required />
                <label className="agreed-terms">I agree to the T&C's and Privacy Policy.</label>
                </div>
                <div className='btn-wrapper'>
                  <button type='submit' className='step-btn btn-continue'>Book Now</button>
                </div>
              </>
            ) : null }
          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
