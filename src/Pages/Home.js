import React from 'react';
import AboutGrid from "../components/AboutGrid/AboutGrid";
import BlogGrid from "../components/BlogGrid/BlogGrid";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Testimonial from "../components/Testimonial/Testimonial";
import VideoContent from "../components/VideoContent/VideoContent";
import SubcriptionPopup from "../components/SubcriptionPopup/SubcriptionPopup";


function Home() {
  return(
    <>
      <HeroBanner />
      <AboutGrid />
      <VideoContent />
      <BlogGrid />
      <Testimonial />
      <SubcriptionPopup />
    </>
  );
}

export default Home;