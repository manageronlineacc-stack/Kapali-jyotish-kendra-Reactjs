import './VideoContent.scss';
import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_VIDEO_URL = gql`
  query GetVideoUrl {
    videoIframes {
      url
    }
  }
`;

function VideoContent() {
  const { loading, error, data } = useQuery(GET_VIDEO_URL);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const videoUrl = data.videoIframes[0]?.url || '';

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
            {videoUrl ? (
              <>
              <iframe
                width="100%"
                height="100%"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              </>
            ) : (
              <p>No video URL available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContent;
