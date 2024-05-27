import './VideoContent.scss';
import { VIDEO_CONTENT } from '../../util/data';
import React, { useState } from 'react';


function VideoContent() { 
  const { videoIframe } = VIDEO_CONTENT[0];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
    <div className='video-content-wrapper'>
      <div className='container'>
        <div className='content-info'>
          <div className='video-play' onClick={openPopup}>
            <i className='fa fa-play'></i>
          </div>
          <p>Astrologer - a honest friend, philosopher and guide.</p>
        </div>
      </div>
    </div>
    <div className={`video-popup ${isPopupOpen ? 'show-popup' : ''}`}>
      <div className='popup-block'>
        <button className='close-icon' onClick={closePopup}>x</button>
        <div className='video-block'>
          {videoIframe}
        </div>
      </div>
    </div>
    </>
  );
}

export default VideoContent;