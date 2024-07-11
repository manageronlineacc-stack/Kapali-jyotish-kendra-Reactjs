import './ServiceForm.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ServiceForm() {
  const [selectedService, setSelectedService] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [agreed, setAgreed] = useState(false);

  // Use location to get query parameters
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceTitle = params.get('service');
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
  }, [location.search]);
  
  const handleServiceChange = (e) => {
    const value = e.target.value;
    setSelectedService(value);

    if (value === '') {
      setServiceError('Please select a service.');
    } else {
      setServiceError('');
    }
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(value)) {
      setNameError('Please enter a valid name.');
    } else {
      setNameError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(value)) {
      setPhoneNumberError('Please enter a valid phone number.');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(value)) {
      setEmailError('Please enter a valid email.');
    } else {
      setEmailError('');
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNewResponse = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setSelectedService('');
    setServiceError('');
    setName('');
    setNameError('');
    setPhoneNumber('');
    setPhoneNumberError('');
    setEmail('');
    setEmailError('');
    setMessage('');
    setAgreed(false);
  };

  const nextStep = () => {
    if (currentStep === 1 && selectedService === '') {
      setServiceError('Please select a service.');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const isStep2Valid = () => {
    return (
      name !== '' &&
      nameError === '' &&
      phoneNumber !== '' &&
      phoneNumberError === '' &&
      email !== '' &&
      emailError === ''
    );
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
            <div className='step-navigation-wrapper'>
              <div className={`step-navigation-item ${currentStep === 1 ? 'active' : ''}`}>
                <span>Step 1</span>
                Select Service
              </div>
              <div className={`step-navigation-item ${currentStep === 2 ? 'active' : ''}`}>
                <span>Step 2</span>
                Personal Details
              </div>
              <div className={`step-navigation-item ${currentStep === 3 ? 'active' : ''}`}>
                <span>Step 3</span>
                Review and Submit
              </div>
            </div>

            <div className={`step-form-panel ${currentStep === 1 ? 'show-panel' : ''}`}>
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
                  <option value="Properties-Land-House Consultation">Properties-Land-House Consultation</option>
                  <option value="Astro Vastu">Astro Vastu</option>
                  <option value="All Legal Cases">All Legal Cases</option>
                  <option value="Past Karma Analysis">Past Karma Analysis</option>
                  <option value="Annual Prediction">Annual Prediction</option>
                  <option value="Annual Prediction">Prashna Consultation</option>
                </select>
                {serviceError && <div className="error-message">{serviceError}</div>}
              </div>
              <div className='btn-wrapper'>
                <button type='button' className='step-btn btn-continue' onClick={nextStep} disabled={selectedService === ''}>Continue</button>
              </div>
            </div>

            <div className={`step-form-panel ${currentStep === 2 ? 'show-panel' : ''}`}>
              <div className='form-element'>
                <span className='form-label'>Name</span>
                <input type='text' name='entry.2107416055' className={`form-input ${nameError ? 'error' : ''}`} value={name} onChange={handleNameChange} />
                {nameError && <div className="error-message">{nameError}</div>}
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
              {(selectedService === 'Marriage Compatibility' || selectedService === 'Marriage Consultation') && (
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
              )}
              <div className='form-element'>
                <span className='form-label'>Phone Number</span>
                <input type='text' name='entry.857542767' className={`form-input ${phoneNumberError ? 'error' : ''}`} value={phoneNumber} onChange={handlePhoneNumberChange} />
                {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
              </div>
              <div className='form-element'>
                <span className='form-label'>Email</span>
                <input type='email' name='entry.121664808' className={`form-input ${emailError ? 'error' : ''}`} value={email} onChange={handleEmailChange} />
                {emailError && <div className="error-message">{emailError}</div>}
              </div>
              <div className='form-element'>
                <span className='form-label'>Message</span>
                <textarea name='entry.2146597286' className='form-input' value={message} onChange={handleMessageChange}></textarea>
              </div>
              <div className='btn-wrapper'>
                <button type='button' className='step-btn btn-back' onClick={previousStep}>Back</button>
                <button type='button' className='step-btn btn-continue' onClick={nextStep} disabled={!isStep2Valid()}>Continue</button>
              </div>
            </div>

            <div className={`step-form-panel ${currentStep === 3 ? 'show-panel' : ''}`}>
              <div className='form-element'>
                <span className='form-label'>Selected Service</span>
                <p>{selectedService}</p>
              </div>
              <div className='form-element'>
                <span className='form-label'>Name</span>
                <p>{name}</p>
              </div>
              <div className='form-element'>
                <span className='form-label'>Phone Number</span>
                <p>{phoneNumber}</p>
              </div>
              <div className='form-element'>
                <span className='form-label'>Email</span>
                <p>{email}</p>
              </div>
              <div className='form-element'>
                <span className='form-label'>Message</span>
                <p>{message}</p>
              </div>
              <div className='form-element'>
                <input type="checkbox" id="agreed" name="agreed" checked={agreed} onChange={() => setAgreed(!agreed)} />
                <label className="agreed-terms">I agree to the <Link to='/terms-and-condition'>Terms and condition</Link> and <Link to='/privacy-policy'>Privacy Policy</Link>.</label>
              </div>
              <div className='btn-wrapper'>
                <button type='button' className='step-btn btn-back' onClick={previousStep}>Back</button>
                <button type='submit' className='step-btn btn-continue' disabled={!agreed}>Book Now</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ServiceForm;
