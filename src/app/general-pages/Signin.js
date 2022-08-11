import React, { Component, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const url = "http://localhost:4000/users"



const Signin = () => {
  // e.preventDefault();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
   
    axios.post(url, {
      email: email,
      password: password,
      accessToken : "asasdyuioweudheoidf7wedy"
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
      <div className="az-signin-wrapper">
        <div className="az-card-signin">
          {/* <img src={} */}
          <h1 className="az-logo">kitlap</h1>
          <div className="az-signin-header">
            <h2>Welcome back!</h2>
            <h4>Please sign in to continue</h4>
            <form action="#/" onSubmit={() => login()} >
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
              </div>{/* form-group */}
              <div className="form-group">
                <label>Password</label>
                <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and \n  one uppercase and lowercase letter, \n and at least 8 or more characters" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
              </div>{/* form-group */}
              <button className="btn btn-az-primary btn-block">Sign In </button>
              {
                // console.log(email, password)
              }
            </form>
          </div>
          <div className="az-signin-footer">
            <p><a href="#/">Forgot password?</a></p>
            <p>Don't have an account? <Link to="/general-pages/signup">Create an Account</Link></p>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Signin
