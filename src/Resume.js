import React from "react";
import Achievement from "./Components/Achievement";
import Education from "./Components/Education";
import Language from "./Components/Language";

function Resume() {
    return (
        <div className="container3">
            <header>
                RESUME
            </header>
            <Achievement />
            <Language />
            <Education />
        </div>
    )
}

export default Resume;