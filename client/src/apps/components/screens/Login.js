import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn waves-effect waves-light">Login
            </button>
                <div className="link-account">

                    <Link to="/signup">Don't have an account? <u>Register Here</u></Link>
                </div>
            </div>
        </div>
    )
}


export default Login;
