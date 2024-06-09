import React, { useState, useContext } from "react";
import PointsContext from "../../context/pointsContext";
import Navbar from "../common/Navbar/navbar.js";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(PointsContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!email && !password) {
            return;
        }
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/login`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.status === "success") {
            localStorage.setItem("authorization", data.data.token);
            login();
            navigate("/image-generator");
        }
    }

    return (
        <div>
            <Navbar page='login' />
            <div className="login-main-container">
                <div className="login-form-container">
                    <h1>Login</h1>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="login-input"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="login-input"
                    />
                    <button onClick={handleClick} className="login-button">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
