import React, { Component, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const url = "http://localhost:3000/users"


//login 

const login = (email, password) => {
  console.log(email, password)
  return axios
    .post(url, {

    }).then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response.data
    }
    )
}



const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div>
      <div className="az-signin-wrapper">
        <div className="az-card-signin">
          {/* <img src={} */}
          <h1 className="az-logo">kitlap</h1>
          <div className="az-signin-header">
            <h2>Welcome back!</h2>
            <h4>Please sign in to continue</h4>

            <form action="#/" onSubmit={login}>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
              </div>{/* form-group */}
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
              </div>{/* form-group */}
              <button className="btn btn-az-primary btn-block">Sign In </button>
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
