'use client';
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <>
            <section id="resume" className="resume section">
                <div className="container section-title">
                    <h2>Resume</h2>
                    <p>Motivated and detail-oriented web developer with a strong foundation in front-end technologies including HTML, CSS, JavaScript, and React. Passionate about creating responsive, user-friendly interfaces and continuously learning new tools and frameworks. Committed to delivering clean, maintainable code and contributing to team success.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">SUMMARY</h3>
                            <div className="resume-item pb-0">
                                <h4>Zoheb khan</h4>
                                <p><em>Ambitious Front-End Web Developer with over [1 year] of experience in designing and developing responsive, user-friendly websites and web applications. Proficient in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS. Specializing in building modern, performance-optimized websites with a strong focus on delivering seamless user experiences. Experienced in collaborating with cross-functional teams to create high-quality digital solutions.</em></p>
                                <ul>
                                    <li>+91 9970538128</li>
                                    <li>zoheb.khan3006@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">EDUCATION</h3>
                            <div className="resume-item">
                                <h4>Degree Late. Vamanrao pitambare Management College , Padegaon &amp; Web Developer</h4>
                                <h5>2023 - 2025</h5>
                                <p><em>Bachelor of Science (BSC.Computer Science) </em></p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">PROFESSIONAL TRAINING EXPERIENCE</h3>
                            <div className="resume-item">
                                <h4>Senior Web Developer</h4>
                                <h5>Present Web Developer</h5>
                                <p><em>Near by VIP. Central Naka Road.. </em></p>
                                <p><em>Front-End — [DualSysco Research & Development] </em></p>
                                <ul>
                                    <li>Developed and maintained responsive web applications using HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS, ensuring cross-browser compatibility and mobile responsiveness.</li>
                                    <li>Collaborated with back-end developers to integrate APIs and manage dynamic data updates.</li>
                                    <li>Improved page load speed by optimizing CSS and JavaScript assets, resulting in a 30-40% reduction in load time.</li>
                                    <li>Enhanced user experience by implementing interactive UI components and utilizing utility-first design approaches in Tailwind CSS for efficient styling.</li>
                                    <li>Used Git and GitHub for version control and team collaboration.</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>PROJECT EXPERIENCE</h4>
                                <p><em></em></p>
                                <ul>
                                    <li>Designed and developed a responsive website for Abbas Transport Company, showcasing their services and improving user engagement.</li>
                                    <li>Implemented the project using HTML, CSS, JavaScript, and React, ensuring a seamless user experience across all devices.</li>
                                    <li>Optimized the website for performance and SEO, resulting in faster load times and improved search engine visibility.</li>
                                    <li>Integrated interactive features like service listings, contact forms, and dynamic routing for better user navigation.</li>
                                    <div className='section-title'>
                                        <h2>Live Projects</h2>
                                        <ul>
                                            <li>
                                                <Link href="https://www.abbastransport.com/">1) Abbas Transport</Link>
                                            </li>
                                            <li>
                                                <Link href="https://stoneskill.com/">2) Stone Skills</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page