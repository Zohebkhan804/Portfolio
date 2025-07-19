'use client';
import React from 'react'

const page = () => {
    return (
        <>
            <section id="about" className="about section p-8">
                <div className="container section-title">
                    <h2 className="text-3xl font-bold mb-4">About</h2>
                    <p className="text-gray-700">
                        Hi, I’m Zoheb Khan, a Front-End Developer skilled in HTML, CSS, JavaScript, React.js, Next.js, tailwind css and Bootstrap. I focus on building clean, responsive, and user-friendly web interfaces that work seamlessly across devices. Passionate about design, performance, and modern UI trends, I enjoy turning ideas into polished digital experiences and collaborating with teams to bring creative projects to life.
                    </p>
                </div>
                <div className="p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-start items-start gap-4">
                        <div className="w-full md:w-1/3">
                            <img
                                src="assets/img/Myimgs/zoheb.jpg"
                                alt=""
                                className="w-full h-auto rounded-md shadow"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-xl md:text-2xl font-semibold mt-4 md:mt-0">
                                UI Designer &amp; Web Developer.
                            </h2>
                            <p className="fst-italic py-3">
                                Crafting visually appealing, responsive, and user-friendly web interfaces using modern design principles and front-end technologies.
                            </p>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        {/* <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span>
                                        </li> */}
                                        {/* <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span>
                                        </li> */}
                                        <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9970538128</span>
                                        </li>
                                        {/* <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className='list-unstyled'>
                                        {/* <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span>
                                        </li> */}
                                        {/* <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                                        </li> */}
                                        <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>zoheb.khan3006@gmail.com</span>
                                        </li>
                                        {/* <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Blending design and code to build smooth, responsive, and engaging web experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;