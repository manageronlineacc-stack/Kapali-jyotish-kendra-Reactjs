import AboutGrid from "../components/AboutGrid/AboutGrid";
import BlogGrid from "../components/BlogGrid/BlogGrid";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Testimonial from "../components/Testimonial/Testimonial";
import VideoContent from "../components/VideoContent/VideoContent";


function Home() {
  return(
    <>
      <HeroBanner />
      <AboutGrid />
      <VideoContent />
      <BlogGrid />
      <Testimonial />
    </>
  );
}

export default Home;