import './NavBar.scss';
import logo from '../../../public/img/kiwi.svg'


  
const NavBar =  () => {
    return (
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>SAMS WORLD</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>
    );
  };

  export default NavBar