import { Route, Routes,useLocation } from 'react-router-dom';
import './App.css';
import Loginform from './Loginform';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contactus from './Contactus';
import Menu from './Menu';
import Cookies from "js-cookie"
import Protectedroutes from './Protectedroutes';
function App() {

  const location = useLocation();
  const hideHeader = location.pathname === '/';
  const cookieemail = Cookies.get('email')
  const cookiepass = Cookies.get('password')
  const isLoggedIn = cookieemail && cookiepass;
  return (
    <div className="App">
    {!hideHeader && <Header/>}

      <Routes>
      
        
      <Route path="/" element={<Loginform/>}/> 
      <Route element={<Protectedroutes/>}> 
     <Route path="/dasboard" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contactus/>}/>
<Route path="/menu" element={<Menu/>}/>
</Route> 
      </Routes>
     {!hideHeader && <Footer/>}
    </div>
  );
}

export default App;

