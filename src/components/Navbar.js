import { NavLink } from 'react-router-dom';
import image from '../assets/planet.png';
import './style/Navbar.css';

function Navbar() {
  return (
    <nav className="navmenu">
      <span className="logotipe"><img src={image} alt="Space" /></span>
      <h1>Space Travelers Hub</h1>
      <div className="links">
        <NavLink
          to="/Rockets"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Rockets
        </NavLink>
        <NavLink
          to="/Missions"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Missions

        </NavLink>
        <NavLink
          to="/MyProfile"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          | My Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
