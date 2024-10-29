import  '../styles/Project.css';
import pushPull from '../assets/pushPull.gif';
import timer from '../assets/timer.gif';
import cedar from '../assets/cedar.png';
import githubImg from '../assets/github.png';
import readme from '../assets/readme.png';


// set each card to have title and link to deployed app and github repo


function Portfolio () {
    return (
        <div className = "body">
            <h2 className = "h2">Portfolio</h2>
            <div className = "portfolio">
            
            
                <div className = "project" style={{ backgroundImage: `url(${timer})`, backgroundSize: "contain" }}>
                    <div className = "overlay">
                        <a class= "text" href="https://cgroth06.github.io/Themed-Timer/">Themed-Timer</a>
                        <a class= "text" href="https://github.com/cgroth06/Themed-Timer"><img src={githubImg} alt="GitHub" style={{height: "20px"}}></img></a>
                    </div>
                </div>
                <div className = "project"  style={{  backgroundImage: `url(${readme})`, backgroundSize: "cover"}}>
                    <div  className = "overlay">    
                        <a class= "text" href="https://github.com/cgroth06/README-Generator">README Generator  <img src={githubImg} alt="GitHub" style={{height: "20px"}}></img> </a>
                    </div>
                </div>
                <div className = "project"  style={{  backgroundImage: `url(${pushPull})`, backgroundSize: "cover"}}>
                    <div  className = "overlay">    
                        <a class= "text" href="https://www.chrisgroth.com/?lightbox=dataItem-lmmhusu33">push &lt; &gt; pull </a>
                    </div>
                </div>
                <div className = "project" style={{ backgroundImage: `url(${cedar})`, backgroundSize: "cover" }}>
                    <div  className = "overlay">
                    <a class= "text" href="https://www.chrisgroth.com/?lightbox=dataItem-lmmhusu34">Abscents Cedar </a> 
                    </div>
                </div>
                <div className = "pendingproject" >
                    
                        <p class= "text">coming soon...</p>
                    
                </div>
                <div className = "pendingproject" >
                    
                        <p class= "text">coming soon...</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Portfolio;