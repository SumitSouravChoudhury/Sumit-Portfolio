import React from "react";
import LanguageComponent from "./LanguageComponent";
import storeWeb, { storePro, storeCom } from "./Store";

function createStore(prop) {
    return (
        <LanguageComponent key={prop.id}
            name={prop.name}
        />
    )
}

function Language() {
    return (
        <div clasNames="item3">
            <header>Language</header>
            <div className="item32">
                <div className="item321">
                    <h1>Web Development</h1>
                    {storeWeb.map(createStore)}
                    <h1>Programming Languages</h1>
                    {storePro.map(createStore)}
                    <h1>Communication</h1>
                    {storeCom.map(createStore)}
                </div>
            </div>
        </div>
    )
}

export default Language;