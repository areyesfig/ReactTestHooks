import React from 'react'
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

                <Link className="navbar-brand" >useContext</Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact actionClassName="active" to ="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact actionClassName="active" to ="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink exact actionClassName="active" to ="/login" className="nav-link">Login</NavLink>
                    </li>
                    </ul>
                </div>
        </nav>
    )
}
