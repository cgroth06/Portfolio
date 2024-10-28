import React from 'react';
import '../styles/Header.css';
import grindinghead from '../assets/grindinghead.jpeg';
import Navigation from './Navigation';

const styles = {
  headerStyle: {
    backgroundImage: `url(${grindinghead})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    height: 200,
    
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
