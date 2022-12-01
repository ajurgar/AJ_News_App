import React from "react";

const NavBar = () => {

    return (
        <nav id="main-navbar">
            <h1 className="title">AJ News App</h1>
            <ul className="navbar-links">
                <li className="link"><a href="/"> Home </a></li>
                <li className="link"><a href="/articles"> Articles </a></li>
                <li className="link"> <a href="/journalists"> Journalists </a></li>
                <li className="link"><a href="/settings"> Settings </a></li>
            </ul>

        </nav>
    )
}

export default NavBar;