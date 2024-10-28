import  '../styles/Project.css';
import pushPull from '../assets/pushPull.gif';
import timer from '../assets/timer.gif';

// set each card to have title and link to deployed app and github repo


function Portfolio () {
    return (
        <div className = "body">
        <h2 className = "h2">Portfolio</h2>
        <div className = "portfolio">
            
            
            <div className = "project"> <img src= {timer} style={{ height:"200px"}}/></div>
            <div className = "project" id="p2"> <img src= {pushPull} style={{ height:"200px"}}/></div>
            <div className = "project"> Project 3</div>
            <div className = "project"> Project 4</div>
            <div className = "project"> Project 5</div>
            <div className = "project"> Project 6</div>
        </div>
        </div>
    );
}

export default Portfolio;