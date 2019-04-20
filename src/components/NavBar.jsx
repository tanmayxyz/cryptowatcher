import React from 'react';
//router are not created
//logo not added
const NavBar = (props) =>{
    return (
        <nav>
            <div className="nav-wrapper teal darken-3 ">
                <span className="brand-logo center">Crypto Watcher</span>
                <ul id="nav-mobile" className="left hide-on-small-and-down ">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/see_more">See more</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;