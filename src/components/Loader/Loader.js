import React, { useState, useEffect } from 'react';
import { Network } from '@capacitor/network';
import './Loader.scss';

function Loader() {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleNetworkStatus = async () => {
      const status = await Network.getStatus();
      setIsOnline(status.connected);
      if (!status.connected) {
        setIsOnline(false);
      }
    };

    Network.addListener('networkStatusChange', handleNetworkStatus);

    // Check initial network state
    handleNetworkStatus();

    // Show the loader for at least 3 seconds
    const loaderTimeout = setTimeout(() => {
      if (isOnline) {
        setIsFadingOut(true); // Start fading out if online
        document.body.style.overflow = 'auto';
      }
    }, 3000);

    // Clean up event listeners and timeout on component unmount
    return () => {
      clearTimeout(loaderTimeout);
      Network.removeAllListeners();
    };
  }, [isOnline]);

  const retryConnection = () => {
    window.location.reload(true); // Force a fresh reload
  };

  return (
    <div className={`loader-network-wrapper ${isFadingOut ? 'fade-out' : ''}`}>
      {isOnline ? (
        <div className='loader-wrapper'>
        <div className="hexagon" aria-label="Animated hexagonal ripples">
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
          <div className="hexagon__group">
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
            <div className="hexagon__sector"></div>
          </div>
        </div>
          <p aria-label="Loading">Kapali Jyotish Kendra</p>
        </div>
      ) : (
        <div className='network-check'>
          <h2>Whoops!</h2>
          <p>No Internet connection found. Check your connection</p>
          <button className='btn btn-secondary btn-retry' onClick={retryConnection}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default Loader;
