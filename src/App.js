
import './App.css';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Navbar from './Component/Navbar/Navbar';
function App() {
  return (
    <div >
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
