import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';

function Layout() {
  const location = useLocation();

  // Scroll to top and set fade effect to true when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <div className={`page-layout-wrapper ${location.pathname === '/' ? 'home-page' : ''}`}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
