import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="logo" />
        </Link>
      </div>

      <ul className={menuOpen ? 'menu active' : 'menu'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>Categories</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>About Us</Link></li>
        <li><Link to="/teams" onClick={() => setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Career</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Blog</Link></li>
      </ul>

      <div className="right-part">
        <button>Get Started</button>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
