import { Link } from 'react-router-dom';
import '../App.css'
const Navbar = () =>{
    return(
        <>
        
        <nav className="navbar navbar-expand-lg ">
       <div className="container-fluid">
    <b className="navbar-brand" href="#"><h1 class="animate__animated animate__heartBeat animate__infinite	infinite m-3 m-3"> Helping Hand</h1></b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="menu">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/"  className="nav-link active m-3" >Home</Link>
        </li>
        
        <li className="nav-item">
        <Link to="/about" className="nav-link m-3">About</Link> 
        </li>
        
        <li className="nav-item">
          <a className="nav-link m-3"  href="#">Help</a>
        </li>

        <li className="nav-item">
        <Link to="/team" className="nav-link m-3">Team</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link m-3" href="#">Contact</a>
        </li>

        </ul>
      
    </div>
  </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;