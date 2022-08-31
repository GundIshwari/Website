import './Option.css'
import Lottie from "lottie-react";
import anim from "../Animation/110980-kids-learning-at-school.json"
// import ani from "../Animation/30826-online-shopping.json"
// import anima from "../Animation/46541-nature-visite-travel.json"
// import animat from "../Animation/51634-train-buildings.json"
import animato from "../Animation/53084-store-location.json"
// import animati from "../Animation/89685-care-services.json"
import { Link } from 'react-router-dom'; 
const Option = () => {
    return(
        <>
        
        <Link to="/option" className="Auth-form-containerr1">
            <form className="Auth-formtheme1">
                <div className="Auth-form-contentfood">
                
                    <Lottie animationData={animato} loop={true} />
                </div>
            </form>
            <form className="Auth-formcolfood">
                <h1>Food</h1>
            </form>
        </Link>
               
        </>
        )

}
export default Option;