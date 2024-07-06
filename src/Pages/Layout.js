import { useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';

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
