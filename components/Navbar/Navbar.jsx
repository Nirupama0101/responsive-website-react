
import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { useEffect } from 'react';

const Navbar = () => {

  const[sticky,setSticky]=useState(false);

  useEffect( ()=>{
      window.addEventListener('scroll',()=>{
         window.scrollY > 500 ? setSticky(true):setSticky(false);
      })
  },[])

  const [mobilemenu,setMobilemenu] = useState(false);
  const toggleMenu=()=>{
    mobilemenu?setMobilemenu(false):setMobilemenu(true);
  }

  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobilemenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
