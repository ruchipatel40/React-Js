import './App.css';
import Footer from './Components/Footer';
import Service from './Pages/Service';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid text-light bglineargradiant" >
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/service' element={<Service />}/>
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
