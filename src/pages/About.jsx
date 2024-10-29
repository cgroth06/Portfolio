import '../styles/About.css';
import headshot from '../assets/headshot.jpeg';

export default function About() {
    return (
      <div className = "about" style={{minHeight: "calc(100vh - 260px)"}}>
        <div><img src = {headshot} alt = "Chris Groth" style={{ borderRadius: "100px", height:"200px"}} /></div>
        <p className = "p">
          Chris Groth is a full stack developer with a passion for problem solving, learning, 
          and collaborating. Chris has a background in the arts and education, and is excited 
          to bring his unique perspective to the world of web development. Chris is currently a student 
          of the University of Minnesota Web Development Bootcamp, and is eager to continue 
          learning and growing in the field of web development.
        </p>
      </div>
    );
  }
  