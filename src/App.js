import './App.css';
import Navbr from './Components/Navbr'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import NeedHelp from './Pages/NeedHelp';
import Publication from './Pages/Publication';
import Donate from './Pages/Donate';
import SupportUs from './Pages/SupportUs';
import Login from './Pages/Login';
import SpecialAccess from './Pages/SpecialAccess';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/'  element={<HomePage />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
        <Route path='/help' element={<NeedHelp />}></Route>
        <Route path='/publication' element={<Publication />}></Route>
        <Route path='/donate' element={<Donate />}></Route>
        <Route path='/support' element={<SupportUs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/access' element={<SpecialAccess />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
