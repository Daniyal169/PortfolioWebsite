import React, { useRef, useState } from "react";
import "./Contact.css";
import useTheme from "../../context/Context";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

    const [state, handleSubmit] = useForm("Add Yours");



    const { themeMode } = useTheme();

    return (
        <div className="contact-form" id="contact">
            <div className="c-left" data-aos="slide-right">
                <span style={{
                    color: themeMode === "dark" ? "white" : "",
                }}>Get in Touch</span>
                <span style={{ color: themeMode === "dark" ? "#00FFFF" : "" }}>Contact me</span>
                <div className="blur1 s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="c-right" data-aos="fade-in">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" className="user" placeholder="Name" required />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />

                    <input type="email" name="email" className="user" placeholder="Email" required />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea name="message" className="user" placeholder="Message" required></textarea>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <input type="submit" value="Send" className="btn" />

                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
