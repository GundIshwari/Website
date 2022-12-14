import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h1 className='Auth-form-name'>Helping Hand</h1><br/>
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
         
            <label>Enter Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Username"
            />
          </div><br/>
          <div className="form-group mt-3">
            <label>Enter Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div><br/>
          <p className="forgot-password text-right mt-2">
            <a href="#">Forgot password?</a><br/>
          </p>
          <Link to ="/city" className="d-grid gap-2 mt-3">
            <button type="submit" id="submit" className="btn btn-primary">
              Submit
            </button>
          

          </Link>
          
        </div>
      </form>
    </div>
  )
}
export default Login;