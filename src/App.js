//import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Header from './component/header.component';
import Navbar from './component/navbar.component';
//import About from './pages/About';
//import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      */}
  
    </div>
  );
}

export default App;

