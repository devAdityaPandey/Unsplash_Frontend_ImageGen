import React, { useState } from "react";
import Navbar from "../common/Navbar/navbar";
import "./signup.css";
import { useNavigate } from "react-router-dom"; 

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!email || !password) {
            return;
        }
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/signup`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        console.log(data);
        navigate("/login");
    }

    return (
        <div>
            <Navbar page='signup' />
            <div className="signup-main-container">
                <div className="signup-form-container">
                    <h1>Signup</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="signup-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="signup-input"
                    />
                    <button onClick={handleClick} className="signup-button">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
