import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

function Navbar() {
// TODO: Create a styles object called "styles"
const styles= {
  background: 'green',
  display:'flex',
  justifyContent: 'flex-end',
}

  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
