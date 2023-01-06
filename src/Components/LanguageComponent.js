import React from "react";

function LanguageComponent(props) {
    return (
        <div className="list">
            <div className="bullet">

            </div>
            {props.name}
        </div>
    )
}

export default LanguageComponent;