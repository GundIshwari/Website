import './City.css'
import'../images/kali-masjid.jpg'
import { Link } from 'react-router-dom'; 
const City = () => {
    return(
        <>
        
        <Link to="/option" className="Auth-form-containerrow1">
            <form className="Auth-formcol1">
                <h1>Mumbai</h1>
            </form>
            <form className="Auth-formcol2">
                <h1>Pune</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow2">
            <form className="Auth-formrow2col1">
                <h1>Nagpur</h1>
            </form>
            <form className="Auth-formrow2col2">
                <h1>Ahemednagar</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow3">
            <form className="Auth-formrow3col1">
                <h1>Kolhapur</h1>
            </form>
            <form className="Auth-formrow3col2">
                <h1>Aurangabad</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow4">
            <form className="Auth-formrow4col1">
                <h1>Nashik</h1>
            </form>
            <form className="Auth-formrow4col2">
                <h1>Osmanabad</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow5">
            <form className="Auth-formrow5col1">
                <h1>Amravati</h1>
            </form>
            <form className="Auth-formrow5col2">
                <h1>Solapur</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow6">
            <form className="Auth-formrow6col1">
                <h1>Jalgaon</h1>
            </form>
            <form className="Auth-formrow6col2">
                <h1>Dhule</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow7">
            <form className="Auth-formrow7col1">
                <h1>Latur</h1>
            </form>
            <form className="Auth-formrow7col2">
                <h1>Nanded</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow8">
            <form className="Auth-formrow8col1">
                <h1>Akola</h1>
            </form>
            <form className="Auth-formrow8col2">
                <h1>Jalna</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow9">
            <form className="Auth-formrow9col1">
                <h1>Beed</h1>
            </form>
            <form className="Auth-formrow9col2">
                <h1>Satara</h1>
            </form>
        </Link>

        <Link to="/option" className="Auth-form-containerrow10">
            <form className="Auth-formrow10col1">
                <h1>Yavatmal</h1>
            </form>
            <form className="Auth-formrow10col2">
                <h1>Panvel</h1>
            </form>
        </Link>
    
        </>
       
    )
}
export default City;