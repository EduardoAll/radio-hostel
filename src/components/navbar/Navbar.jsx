import { useRef } from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import './Navbar.css';
import logo from '../../media/logo.png'

function Navbar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return(
    <header className="h-16 bg-transparent w-full">
      <div>
        <img className="logo" src={logo} alt='logo' />
      </div>
      <nav className="nv" ref={navRef}>
       <a href="/" onClick={hideNavbar}>Inicio</a>
       <a href="/programacion" onClick={hideNavbar}>Programación</a>
       <a href="/contacto" onClick={hideNavbar}>Contacto</a>
       <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes/>
       </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
         <FaBars/>
      </button>
    </header>


  );
}

export default Navbar;
