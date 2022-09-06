import { Link } from 'react-router-dom';
import image from '../assets/planet.png';
import './style/Navbar.css';

function Navbar() {
  return (
    <nav className="navmenu">
      <span className="logotipe"><img src={image} alt="Space" /></span>
      <h1>Space Travelers Hub</h1>
      <div className="links">
        <Link to="/">Rockets</Link>
        <Link to="/">Missions</Link>
        <Link to="/"> | Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;
