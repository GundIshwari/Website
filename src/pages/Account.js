import React from 'react';
import './Account.css';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h1 className='form-name'>Helping Hand</h1><br/>
          <h3 className="form-title">Create An Account</h3>
          <div className="form-group mt-3">
          <div className="form-group mt-3">
            <label>Enter Email</label>
            <input
              type="Email"
              className="form-control mt-1"
              placeholder="Email"
            />
          </div><br/>
         
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
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Retype your password"
            />
          </div><br/>

          
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
export default Account ;