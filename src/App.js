
import './App.css';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Dashboard from './Admin/component/Dashboard'
import Customer from './Admin/component/Customer';
import AdminTeam from './Admin/component/AdminTeam';
import AdminSevice from './Admin/component/AdminSevice';

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
   <Route path='/dashboard' element={<Dashboard/>}>
      <Route path='customer' element={<Customer/>}/>
      <Route path='team' element={<AdminTeam/>}/>
      <Route path='service' element={<AdminSevice/>}/>
   
   </Route>
    


 </Routes>
 <Footer/>
 </BrowserRouter>

    </div>
  );
}

export default App;
