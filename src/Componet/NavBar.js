import React from 'react'
import {FaArrowCircleRight, FaOpencart, FaStore} from 'react-icons/fa'
import HorizontalNav from './HorizontalNav'
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
                <div className="container-fluid">
                <a className="navbar-brand" href="/">Agrobet</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse    " id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex justify-content-around w-100">
                        <li className="nav-item w-50 hover">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </li>
                        <li className="nav-item dropdown hover">
                            <a className="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaArrowCircleRight/> Login
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Sign In</a>
                                <a className="dropdown-item" href="/">Orders</a>
                                <a className="dropdown-item" href="/">Whishlist</a>
                                <a className="dropdown-item" href="/">Rewards</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item hover">
                            <a className="nav-link" href="/"><FaOpencart/> Cart</a>
                        </li>
                        <li className="nav-item hover">
                            <a className="nav-link" href="/"><FaStore /> Become a Seller</a>
                        </li>

                    </ul>
                </div>
                </div>
            </nav>
            <HorizontalNav/>

        </>
    )
}

export default NavBar