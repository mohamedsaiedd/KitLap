import React, { Component, useEffect, useState, useRef } from 'react'

import {Link} from 'react-router-dom'
import axios from "axios";

const url = "http://localhost:4000/users"


const  Signup = () => {
  
 

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
    
 
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  function generateString(length) {
      let result = '  ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    
    const signUpreg = () => {
      console.log( rem(4,5))
    // window.location.replace('http://localhost:3000/preview/dashboard' );
    axios.post(url, {
      userName : userName,
      email: email,
      password: password,
      accessToken : generateString(30)
    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("userdata", JSON.stringify(response.data))
       
      }
      return response.data
    }
    )
      .catch(error => {
        console.log(error)
      }
      )
    }
    
    return (
      <div>
        <div className="az-signup-wrapper">
          <div className="az-column-signup-left">
            <div>
              <i className="typcn typcn-chart-bar-outline"></i>
              <h1 className="az-logo">kit<span></span>lap</h1>
              <h5>Responsive Modern Dashboard &amp; Admin Template</h5>
              <p>We are excited to launch our new company and product Azia. After being featured in too many magazines to mention and having created an online stir, we know that BootstrapDash is going to be big. We also hope to win Startup Fictional Business of the Year this year.</p>
              <p>Browse our site and see for yourself why you need Azia.</p>
              <a href="#/" className="btn btn-outline-indigo">Learn More</a>
            </div>
          </div>{/* az-column-signup-left */}
          <div className="az-column-signup">
            <h1 className="az-logo">kit<span></span>lap</h1>
            <div className="az-signup-header">
              <h2>Get Started</h2>
              <h4>It's free to signup and only takes a minute.</h4>

              <form action="#/" onSubmit={() => signUpreg()}>
                <div className="form-group">
                  <label>Firstname &amp; Lastname</label>
                  <input type="text" className="form-control" placeholder="Enter your firstname and lastname" required onChange={(e) => setUserName(e.target.value)}/>
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)}/>
                </div>{/* form-group */}
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>{/* form-group */}
                <button className="btn btn-az-primary btn-block" > 
                  {/* <Link to="/"> */}
                  Create Account
                  {/* </Link> */}
                  </button>
                <div className="row row-xs">
                  <div className="col-sm-6"><button className="btn btn-block"><i className="fab fa-facebook-f"></i> Signup with Facebook</button></div>
                  <div className="col-sm-6 mg-t-10 mg-sm-t-0"><button className="btn btn-primary btn-block"><i className="fab fa-twitter"></i> Signup with Twitter</button></div>
                </div>{/* row */}
              </form>
            </div>{/* az-signup-header */}
            <div className="az-signup-footer">
              <p>Already have an account? <Link to="/general-pages/signin">Sign In</Link></p>
            </div>{/* az-signin-footer */}
          </div>{/* az-column-signup */}
        </div>{/* az-signup-wrapper */}
      </div>
    )
  



//generate random strings

 
}
export default Signup
