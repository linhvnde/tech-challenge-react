import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='NavBarContainer'>
      <NavLink className="NavBar" to="/">Home</NavLink>
      <NavLink className="NavBar" to="/about">About</NavLink>
    </div>
  );
}
