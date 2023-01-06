import React from "react";

var Year = new Date().getFullYear()

function Footer() {
    return (
        <footer>
            <div className="foot">
                <h2>&copy; By Sumit Sourav Choudhury {Year} | All Rights Reserved</h2>
            </div>
        </footer>
    )
}

export default Footer;