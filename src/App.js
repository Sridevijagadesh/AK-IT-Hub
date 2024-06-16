
import './App.css';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div >
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/team' element={<Team/>}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>

    </div>
  );
}

export default App;
