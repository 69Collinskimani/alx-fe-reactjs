// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <Link to="/" style={{ margin: '0 15px', color: 'white' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 15px', color: 'white' }}>About</Link>
      <Link to="/services" style={{ margin: '0 15px', color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 15px', color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;