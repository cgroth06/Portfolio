import '../styles/Resume.css';


function Resume () {
    return (
        <div className="resume" style={{minHeight: "calc(100vh - 260px)"}}>
            
            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>Adobe Creative Suite</li>
            </ul>
            <br></br>
            <a href="../assets/cv.pdf" download="grothcv.pdf">Chris Groth - Downloadable Resume</a>
        </div>
    );
}

export default Resume;