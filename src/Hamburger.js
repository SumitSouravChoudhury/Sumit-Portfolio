import React from "react";
import { Link } from "react-router-dom";

function Hamburger() {
    return (
        <div className="hamu">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/resume">RESUME</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
            <div className="item111">
                <ul className="social">
                    <li><a href="https://instagram.com/sumitc.86?igshid=ZDdkNTZiNTM="><i className="fa fa-instagram"
                        aria-hidden="true"></i> </a></li>
                    <li><a href="https://www.linkedin.com/in/sumit-sourav-choudhury-946aa9227"><i className="fa fa-linkedin"
                        aria-hidden="true"></i> </a></li>
                    <li><a href="https://twitter.com/SumitSChoudhury?t=zmgONz34IhNtt6qKmOeZdg&s=09"><i className="fa fa-twitter"
                        aria-hidden="true"></i> </a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100076879086361"><i className="fa fa-facebook"
                        aria-hidden="true"></i> </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hamburger;