import React, { useState } from "react";
import "./contactus.css";
import Navbar from "../common/Navbar/navbar.js"; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <div>
            <Navbar page="contact" />
            <div className="contactus-main-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} className="contactus-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="contactus-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="contactus-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="contactus-textarea"
                        ></textarea>
                    </div>
                    <button type="submit" className="contactus-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;