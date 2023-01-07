import React from "react";
import { Link } from "react-router-dom";

function Header() {

    window.onload = function () {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-ul");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))

    }

    return (
        <nav className="navbar">
            <div className="div">
                <div>

                </div>
                <h2>Sumit Sourav Choudhury</h2>
            </div>
            <ul className="nav-ul">
                <li className="nav-item"><Link to="/">HOME</Link></li>
                <li className="nav-item"><Link to="/resume">RESUME</Link></li>
                <li className="nav-item"><Link to="/contact">CONTACT</Link></li>
            </ul>
            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

export default Header;