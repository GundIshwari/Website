import './About.css';
import Lottie from "lottie-react";
import anim from "../Animation/81450-team.json"
import { Link } from 'react-router-dom';
const About = () => {
    return(<>
        
            
    <div className="app">
        <div class="row">
            <div class="col">
                <Lottie animationData={anim} loop={true} />
            </div>
            <div class="col">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <p class="h4">ABOUT US</p><br/>
                <p class="h3">Hello! We are diploma third year students.
                We are creating a website named as Helping Hand to help peoples. 
                In our website we are adding the information about cities in Maharashtra....<br/>
                If you want more information about us ,then click on Learn More button. </p> <br/>
                <Link to="/information" className="head-link btn ">Learn More</Link>
            </div>
        </div>
    </div>
            
        
    
    </>)
}
export default About;