import './App.css';
import CustomCursor from './CustomCursor';
import Navbar from './component/Navbar'
import About from './main/About';
import ContactMe from './main/ContactMe';
import FeaturedProjects from './main/FeaturedProjects';
import Footer from './main/Footer';
import Hero from './main/Hero';
import MySkills from './main/MySkills';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <MySkills />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
