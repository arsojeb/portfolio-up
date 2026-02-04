import './App.css';
import CustomCursor from './CustomCursor';
import Navbar from './component/Navbar'
import About from './main/About';
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
    </>
  );
}

export default App;
