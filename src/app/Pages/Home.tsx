"use client";
import React from 'react'

const Home = () => {
    return (
        <>
            <main className='main'>
                <section id="hero" className="hero section dark-background relative">
                    <img src="/images/hero-bg.jpg" alt="Hero" className="h-[650px] w-full object-cover" />
                    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white z-20">
                        <h2 className="text-5xl font-bold">Alex Smith</h2>
                        <p className="text-2xl mt-2">
                            I'm <span className="typed">Developer</span>
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                </section>
            </main>
        </>
    )
}

export default Home;