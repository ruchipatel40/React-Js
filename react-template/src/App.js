import './App.css';
import Footer from './Component/Service/Footer';
import Firstpage from './Component/Service/Firstpage';
import Navbar from './Component/Service/Navbar';
import Service from './Component/Service/Service';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid text-light" style={{backgroundColor:'#191820'}} >
      <Navbar />
      {/* <div id='homecomponent'>
           <Home />
      </div>
       <div id='servicecomponent' >
          <Firstpage />
      </div> */}
     
      {/* <div id='aboutcomponent'>
          <About />
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Firstpage />}/>
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
