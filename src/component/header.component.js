import { Link } from 'react-router-dom';
import '../App.css'
const Header = () =>{
    return(
        <>
        <header>
    <main>
            <section>
                <h3>Welcome to our website</h3>
                <h1>To get information About<span class="change_content"></span></h1>
                <p>"Become member of our website free"</p>
                <Link to="/account" className="head-link btnone  m-3" >Create An Account</Link>
                <Link to="/login" className="head-link btntwo  m-3" >Login</Link>
            </section>
    </main>
    </header>
        
        
        
    </>)
    
}

export default Header;