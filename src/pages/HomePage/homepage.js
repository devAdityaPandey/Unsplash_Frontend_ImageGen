import React from "react";
import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <Navbar page="home" />
            <header class="header">
                <h1>Image Generator</h1>
                <p>Get inspired with stunning images from Unsplash</p>
            </header>

            <div class="container">
                <button class="btn">Generate Image</button>
                <button class="btn btn-secondary">Sign Up</button>
                <button class="btn btn-secondary">Log In</button>
            </div>
        </div>
    )
}

export default HomePage;