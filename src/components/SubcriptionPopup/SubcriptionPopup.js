import React, { useEffect, useState } from 'react';
import './SubcriptionPopup.scss';

function SubcriptionPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('hasSubmitted');
    if (!hasSubmitted) {
      // Show the popup after 5 seconds if the user hasn't submitted the form
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    document.body.style.overflow = 'auto';

    if (!isSubmitted) {
      // Reopen the popup after 10 minutes (600,000 ms)
      setTimeout(() => {
        setIsVisible(true);
      }, 600000);
    }
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Basic email validation regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsValidEmail(emailRegex.test(emailValue));
  };

  const handleIframeLoad = () => {
    if (!email) return; // Skip if email is empty, indicating it's the initial load
    setIsSubmitted(true);
    localStorage.setItem('hasSubmitted', 'true'); // Store the submission state in localStorage
    setEmail('');  // Reset the email input
    setIsVisible(true);  // Show the popup with success message
  };

  return (
    <div className={`subcription-popup-wrapper ${isVisible ? 'active' : ''}`}>
      <div className='popup-body'>
        <div className='close-btn' onClick={closePopup}></div>
      
        <div className='img-wrapper'></div>
        <div className='form-wrapper'>
          {!isSubmitted ? (
            <>
              <div className='title'>Stay Tuned</div>
              <p>Subscribe to our newsletter and get notifications to stay updated</p>
              <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} title='hidden-iframe' onLoad={handleIframeLoad}></iframe>
              <form className='google-subcription-form' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZy6s3H8gdrw2bdXCvEIMQtM9HR72EA_56H4gnoHfyTH9JZA/formResponse' method='post' target="hidden_iframe">
                <div className={`form-group ${!isValidEmail ? 'error' : ''}`}>
                  <input
                    type='email'
                    className='form-input'
                    name='entry.687183153'
                    placeholder='Enter your Email address'
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {!isValidEmail && <span className='error-message'>Please enter a valid email address.</span>}
                  <button type='submit' className='form-submit' disabled={!isValidEmail}>Submit</button>
                </div>
              </form>
            </>
          ) : (
            <div className='success-message'>
              Newsletter subscribed successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubcriptionPopup;
