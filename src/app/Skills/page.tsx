'use client';
import React, { useEffect, useRef } from 'react';

const SkillsSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const bars = document.querySelectorAll('.progress-bar');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const value = entry.target.getAttribute('data-value');
                        (entry.target as HTMLElement).style.width = value + '%';
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.4 }
        );

        bars.forEach(bar => observer.observe(bar));

        return () => {
            bars.forEach(bar => observer.unobserve(bar));
        };
    }, []);

    return (
        <section id="skills" className="skills section light-background" ref={sectionRef}>
            <div className="container section-title">
                <h2>Skills</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="container">
                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="progress mb-3">
                            <span className="skill">HTML <i className="val">98%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="98" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">CSS <i className="val">90%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="90" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">JavaScript <i className="val">80%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="80" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">React.js<i className="val">85%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="85" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress mb-3">
                            <span className="skill">bootstrap <i className="val">90%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="90" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">Tailwind css <i className="val">55%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="55" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">Next.js <i className="val">70%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="70" />
                        </div>
                        <div className="progress mb-3">
                            <span className="skill">PHP / Laravel <i className="val">50%</i></span>
                            <div className="progress-bar bg-primary" role="progressbar" data-value="50" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
