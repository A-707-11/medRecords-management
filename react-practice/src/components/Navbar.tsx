import Logo from '../images/LogoTest.jpg';
import search from '../images/search.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
		<a href='/'>
	  		<img src={Logo} alt="Logo" />
		</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#doctors">DOCTORS</a></li>
        <li><a href="#insurance">INSURANCE</a></li>
        <li><a href="#help">HELP</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li className="search-icon"><img src={search} alt="Search" /></li>
        <li><a href="#login-in-sign-up">LOGIN/SIGNUP</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
