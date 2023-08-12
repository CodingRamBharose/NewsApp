import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand my-3" to="/"><span>R</span>s-<span>N</span>ews</Link>
                    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse list-items" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar