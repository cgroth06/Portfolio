import React from 'react';
import '../styles/Header.css';
import grindinghead from '../assets/grindingbw.png';
import Navigation from './Navigation';

const styles = {
  headerStyle: {
    backgroundImage: `url(${grindinghead})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: 200,
    borderBottom: 'solid 10px rgba(235, 235, 240, 0.635)',

  },

  headingStyle: {
    fontSize: '50px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Chris Groth</h1>
      <Navigation />
    </header>
  );
}

export default Header;
