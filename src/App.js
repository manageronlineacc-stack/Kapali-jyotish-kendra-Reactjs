// import global styling
import './styles/global.scss';

import './util/disableCopyRightClick';

// import react components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import ServicePage from './Pages/ServicePage';
import Blog from './Pages/Blog';
import BlogPage from './Pages/BlogPage';
import ContactUs from './Pages/ContactUs';
import Appointment from './Pages/Appointment';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Disclaimer from './Pages/Disclaimer';
import TermsCondition from './Pages/TermsCondition';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='services' element={<Services />} />
          <Route path='services/:slug' element={<ServicePage />} />
          <Route path='blogs' element={<Blog />} />
          <Route path='blogs/:slug' element={<BlogPage />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='book-appointment' element={<Appointment />} />
          <Route path='terms-and-condition' element={<TermsCondition />} />
          <Route path='disclaimer' element={<Disclaimer />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
