import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavBarArea extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <a href={'/Resume-WilliamJuang.pdf'}>Resume</a>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBarArea