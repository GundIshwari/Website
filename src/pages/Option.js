import './Option.css'
import Lottie from "lottie-react";
import anim from "../Animation/110980-kids-learning-at-school.json"
import ani from "../Animation/30826-online-shopping.json"
import anima from "../Animation/46541-nature-visite-travel.json"
import animat from "../Animation/51634-train-buildings.json"
import animato from "../Animation/53084-store-location.json"
import animati from "../Animation/89685-care-services.json"
import { Link } from 'react-router-dom'; 
const Option = () => {
    return(
        <div1>
        
        <Link to="/food" className="Auth-form-containerr1">
            <form className="Auth-formtheme1">
                <div className="Auth-form-contentfood">
                
                    <Lottie animationData={animato} loop={true} />
                </div>
            </form>
            <form className="Auth-formcolfood">
            <div className="Auth-form-contentf1">
            <b> A Great place to eat</b>
            </div>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerr2">
            
            <form className="Auth-formcolshop">
            <div className="Auth-form-contentf2">
            <b>Shopping places</b>
            </div>
            </form>

            <form className="Auth-formtheme2">
                <div className="Auth-form-contentshop">
                
                    <Lottie animationData={ani} loop={true} />
                </div>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerr3">
            <form className="Auth-formtheme3">
                <div className="Auth-form-contenttou">
                
                    <Lottie animationData={anima} loop={true} />
                </div>
            </form>
            <form className="Auth-formcoltou">
            <div className="Auth-form-contentf3">
            <b>Places to visit</b>
            </div>
            </form>
        </Link>

        <Link to="/education" className="Auth-form-containerr4">
            
            <form className="Auth-formcoledu">
            <div className="Auth-form-contentf4">
            <b>Education</b>
            </div>
            </form>

            <form className="Auth-formtheme4">
                <div className="Auth-form-contentedu">
                
                    <Lottie animationData={anim} loop={true} />
                </div>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerr5">
            <form className="Auth-formtheme5">
                <div className="Auth-form-contenteme">
                
                    <Lottie animationData={animati} loop={true} />
                </div>
            </form>
            <form className="Auth-formcoleme">
            <div className="Auth-form-contentf5">
            <b>Emergency Services</b>
            </div>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerr6">
            
            <form className="Auth-formcolshe">
            <div className="Auth-form-contentf6">
            <b>A place to stay</b>
            </div>
            </form>

            <form className="Auth-formtheme6">
                <div className="Auth-form-contentshe">
                
                    <Lottie animationData={animat} loop={true} />
                </div>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerr7">
            <form className="Auth-formimg7">
                <div className="Auth-form-contentsp">
                
                    
                </div>
            </form>
            <form className="Auth-formcolsp">
            <div className="Auth-form-contentf7">
            <b>Special occasion</b>
            </div>
            </form>
        </Link>
               
        </div1>
        )

}
export default Option;