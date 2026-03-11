import './App.css';
import CustomCursor from './CustomCursor';
import Navbar from './component/Navbar';
import About from './main/About';
import ContactMe from './main/ContactMe';
import FeaturedProjects from './main/FeaturedProjects';
import Footer from './main/Footer';
import MySkills from './main/MySkills';
import Intro from './component/Intro';
import Achievement from './main/Achievement'; // ✅ ADD THIS LINE

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Intro />
      <About />
      <MySkills />
      <Achievement />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;