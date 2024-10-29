import  '../styles/Project.css';
import pushPull from '../assets/pushPull.gif';
import timer from '../assets/timer.gif';
import cedar from '../assets/cedar.png';


// set each card to have title and link to deployed app and github repo


function Portfolio () {
    return (
        <div className = "body">
            <h2 className = "h2">Portfolio</h2>
            <div className = "portfolio">
            
            
                <div className = "project" style={{ backgroundImage: `url(${timer})`, backgroundSize: "contain" }}>
                    <div className = "overlay">
                        <p class= "text">Themed-Timer</p>
                    </div>
                </div>
                <div className = "project"  style={{  backgroundImage: `url(${pushPull})`, backgroundSize: "cover"}}>
                    <div  className = "overlay">    
                        <p class= "text">push &lt; &gt; pull </p>
                    </div>
                </div>
                <div className = "project" style={{ backgroundImage: `url(${cedar})`, backgroundSize: "cover" }}>
                    <div  className = "overlay">
                        <p class= "text">Abscents Cedar</p> 
                    </div>
                </div>
                <div className = "pendingproject" >
                    
                        <p class= "text">coming soon...</p>
                    
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