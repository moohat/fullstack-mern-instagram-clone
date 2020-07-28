import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export const Signup = () => {
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2 className="brand-logo">Instagram</h2>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn waves-effect waves-light">Signup
            </button>
                <div className="link-account">

                    <Link to="/login">Do you have registered ? <u>Login Here</u></Link>
                </div>
            </div>
        </div>
    )
}


export default Signup;
