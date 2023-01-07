import React from "react";

function Achievement() {
    return (
        <div className="item3s">
            <header>Projects</header>
            <a href="../Media/Sumit's resume.pdf" download><button id="button">Download Resume</button></a>
            <div className="item31s">
                <div className="item311s">
                    <a href="https://sumitsportfolio.netlify.app"><img src="../Media/Portfolio.jpg" alt="" /></a>
                </div>
                <div className="item311s">
                    <h2>Portfolio</h2>
                    <p>
                        I have developed this portfolio website which features everything about myself including my skills and projects. I have developed this portfolio website using HTML, CSS and JavaScript.
                    </p>
                    <a href="https://sumitsportfolio.netlify.app"><button>Visit</button></a>
                </div>
            </div>
            <div className="item31s">
                <div className="item311s">
                    <a href="https://github.com/SumitSouravChoudhury/RECPedia"><img src="../Media/REC Pedia.jpg" alt="" /></a>
                </div>
                <div className="item311s">
                    <h2>REC Pedia</h2>
                    <p>
                        I have developed this website which features the content and services provided by REC Pedia, the Official Media House and Event Oraganizing Body of our college. I have used HTML, CSS and JavaScript to develop this website.
                    </p>
                    <a href="https://github.com/SumitSouravChoudhury/RECPedia"><button>Visit</button></a>
                </div>
            </div>
        </div>
    )
}

export default Achievement;