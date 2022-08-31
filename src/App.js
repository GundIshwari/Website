import{BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Navbar from './component/navbar.component';
import Login from './pages/Login'
import Home from "./pages/Home";
import About from "./pages/About"
import Team from "./pages/Team";
import './App.css';
import Account from "./pages/Account";
import City from "./pages/City";
import Option from "./pages/Option";
import Information from "./pages/Information";
function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="account" element={<Account/>}/>
        <Route path="/team" element={<Team/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/city" element={<City/>}/>
        <Route path="/option" element={<Option/>}/>
        <Route path="/information" element={<Information/>}/>
      </Routes>
        </Router>
        
        
       
    </div>
  );
}

export default App;
