import React from 'react';
import '../styles/Header.css';
import grindinghead from '../assets/grindinghead.jpeg';
import linkedinImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';
import instaImg from '../assets/insta.png';


const styles = {
  footerStyle: {
    backgroundImage: `url(${grindinghead})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    height: 70,
    textAlign: "center",
    alignContent: "center",
    color: 'rgba(228, 221, 221, 0.674)',
  }
};

function Footer () {
  return (
      <nav style={styles.footerStyle} className="footer">
          <ul style={styles.navigationStyle}> 
            <a href="https://www.linkedin.com/in/chris-groth"> 
              <img src={linkedinImg} alt="LinkedIn" style={{margin: "10px",backgroundColor: "transparent", width: "42px", height: "42px"}} />
            </a>
            <a href="https://github.com/cgroth06">
              <img src={githubImg} alt="GitHub" style={{backgroundColor: "transparent", width:"42px", height:"42px"}} />
            </a>
            <a href="https://www.instagram.com/chris__groth/">
              <img src={instaImg} alt="Instagram" style={{backgroundColor: "transparent", width:"62px", height:"42px"}} />
            </a>
          </ul>
      </nav>
  );
}


export default Footer;