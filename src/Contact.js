import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [hide, setHide] = useState(false);

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick() {
        setText(name);
        setHide(true);
    }

    return (
        <div className="container2">
            <header style={{ display: hide ? "none" : "block" }}>Hello I'm Sumit</header>
            <div className="greet" style={{ display: hide ? "block" : "none" }}>
                <header>
                    Hello {text}
                </header>
                <h3>Thank you {text} for contacting me. I will try to reach to you as soon as possible.</h3>
                <h3>This is my portfolio website. I have showcase my projects and academic information through this website.</h3>
                <h3>You can head over to <Link className="res" to="/resume">Resume</Link> to view my projects and information.</h3>
                <h3>Or You can head back to <Link className="res" to="/">Home</Link>.</h3>
                <br></br>
                <h3>Love and Regards!</h3>
            </div>
            <div className="form" style={{ display: hide ? "none" : "block" }}>
                <div className="input">
                    <label>First Name</label>
                    <div><input onChange={handleChange} type="text" placeholder="First Name" /></div>
                    <label>Last Name</label>
                    <div><input type="text" placeholder="Last Name" /></div>
                    <label>Email Address</label>
                    <div><input type="email" placeholder="Email Address" /></div>
                    <label>Subject</label>
                    <div><input type="text" placeholder="Subject" /></div>
                    <label>Message</label>
                    <div><input className="message" type="text" placeholder="Message" /></div>
                    <div className="btt">
                        <button onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;