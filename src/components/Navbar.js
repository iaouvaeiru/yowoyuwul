import React from 'react';
import { Link } from 'gatsby';
import ranksBanner from '../images/ranksbanner.png';

const Navbar = () => {

  const linkStyle = {
    fontFamily: 'Montserrat, sans-serif',
    textDecoration: 'none',
    color: 'rgba(64, 64, 64, 0.9)',
    // letterSpacing: '1px',
    fontWeight: 'inherit',
    padding: '5px 10px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    border: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
    ':hover': {
      color: '#ff0000',
      textDecoration: 'underline',
    },
  };

  const bannerStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const navbarLinks = [
    { to: '/', label: 'Home' },
    { to: '/our-story', label: 'Our Story' },
    { to: '/meet-the-presets', label: 'Meet the Presets' },
    { to: '/faq', label: 'Frequently Asked Questions' },
    { to: '/accommodations', label: 'Accommodations' },
    { to: '/attire', label: 'Attire' },
    { to: '/map', label: 'Venue Map' },
    { to: '/registry', label: 'Registry' },
  ];

  const activeLinkStyle = {
    ...linkStyle,
    textDecoration: 'underline',
  };

  return (
    <div>
      <div>
        <div>
          <img src={ranksBanner} alt="ranks banner" style={bannerStyle} />
        </div>
        <h1>Rough Buddy and Yajjii</h1>
        <h2>Felt Cute Might Whiff Later IDK</h2>
      </div>
      <nav>
        {navbarLinks.map((link) => (
          <Link 
            to={link.to} 
            style={linkStyle}
            activeStyle={activeLinkStyle}
            key={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
