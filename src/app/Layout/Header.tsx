"use client";
import Link from 'next/link';
import Home from '../Pages/Home';

const Header = () => {
    return (
        <>
            <header id="header" className="header dark-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list" />
                <div className="profile-img">
                    <img src="assets/img/Myimgs/zohebkhan1.jpg" alt='' className="img-fluid rounded-circle" />
                </div>
                <Link href="/" className="logo d-flex align-items-center justify-content-center">
                    <h1 className="sitename">Zoheb khan</h1>
                </Link>
                <div className="social-links text-end">
                    <Link href="https://www.instagram.com/zubbu.khan_804/" className="instagram"><i className="bi bi-instagram" /></Link>
                </div>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link href="#hero" className="active"><i className="bi bi-house navicon" />Home</Link></li>
                        <li><Link href="/About"><i className="bi bi-person navicon" /> About</Link></li>
                        <li><Link href="#resume"><i className="bi bi-file-earmark-text navicon" /> Resume</Link></li>
                        <li><Link href="#portfolio"><i className="bi bi-images navicon" /> Portfolio</Link></li>
                        <li><Link href="#services"><i className="bi bi-hdd-stack navicon" /> Services</Link></li>
                        <li><Link href="#contact"><i className="bi bi-envelope navicon" /> Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <Home />

        </>
    )
}

export default Header;