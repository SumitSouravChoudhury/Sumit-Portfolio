import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container1">
            <div className="item11">
                <img src="./Media/Sumit.jpg" alt="#" />
                <h3>Sumit Sourav Choudhury</h3>
                <hr></hr>
                <h2>WEB DEVELOPER</h2>
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
            <div className="item12">
                <h1>Hello</h1>
                <h3>Here's who I am & what I do</h3>
                <Link to="/resume"><button>RESUME</button></Link>
                <p>I am Sumit Sourav Choudhury. I am pursuing my degree in Bachelors of Technology from Rewa Engineering College. I have keen interest in Web Development. I am proficient in React, JavaScript, Java, Python, C++, HTML, CSS, NodeJs and MongoDB.</p>

                <p>I have worked in a non-profit organization named 'REC Pedia' which serves as the Official Media House and Event Organizing Body of Rewa Engineering College. I was the Head of Web Develoment department. I have made few projects which are featured in <Link className="res" to="/resume">RESUME</Link> section.</p>
            </div>
        </div>
    )
}

export default Home;