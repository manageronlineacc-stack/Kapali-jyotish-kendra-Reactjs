import React, { useState, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import { App as CapacitorApp } from '@capacitor/app';

function Layout() {
  const location = useLocation();
  const [fade, setFade] = useState(false);

  // Scroll to top and set fade effect to true when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
    setFade(true); // Apply fade-out effect
    const timeout = setTimeout(() => {
      setFade(false);
    }, 800);
    return () => clearTimeout(timeout); // Cleanup
  }, [location.pathname]);

  useEffect(() => {
    if (CapacitorApp) {
      const handleBackButton = ({ canGoBack }) => {
        if (!canGoBack) {
          CapacitorApp.exitApp(); // Exit app if cannot go back
        } else {
          window.history.back(); // Navigate back in history
        }
      };

      // Add listener for Capacitor back button
      const backButtonListener = CapacitorApp.addListener('backButton', handleBackButton);

      return () => {
        backButtonListener.remove(); // Cleanup listener on component unmount
      };
    } else {
      console.warn('CapacitorApp is not available in this environment.');
    }
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <div className={`page-layout-wrapper ${location.pathname === '/' ? 'home-page' : ''}`}>
        {fade ? null : (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default Layout;
