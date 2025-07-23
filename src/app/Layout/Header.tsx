"use client";
import React, { useState } from 'react'
import Home from '../Pages/Home';

const Header = () => {
    return (
        <>
            <header id="header" className="header dark-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list" />
                <div className="profile-img">
                    <img src="assets/img/Myimgs/zohebkhan1.jpg" alt='' className="img-fluid rounded-circle" />
                </div>
                <a href="/" className="logo d-flex align-items-center justify-content-center">
                    <h1 className="sitename">Zoheb khan</h1>
                </a>
                <div className="social-links text-end">
                    <a href="https://www.instagram.com/zubbu.khan_804/" className="instagram"><i className="bi bi-instagram" /></a>
                </div>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active"><i className="bi bi-house navicon" />Home</a></li>
                        <li><a href="/About"><i className="bi bi-person navicon" /> About</a></li>
                        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon" /> Resume</a></li>
                        <li><a href="#portfolio"><i className="bi bi-images navicon" /> Portfolio</a></li>
                        <li><a href="#services"><i className="bi bi-hdd-stack navicon" /> Services</a></li>
                        <li><a href="#contact"><i className="bi bi-envelope navicon" /> Contact</a></li>
                    </ul>
                </nav>
            </header>
            <Home />

        </>
    )
}

export default Header;