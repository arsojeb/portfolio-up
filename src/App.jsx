import './App.css';
import CustomCursor from './CustomCursor';
import Navbar from './component/Navbar'
import About from './main/About';
import Hero from './main/Hero';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
