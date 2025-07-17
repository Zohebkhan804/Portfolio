'use client';
import React from 'react'

const page = () => {
    return (
        <>
            <section id="about" className="about section p-8">
                <div className="container section-title">
                    <h2 className="text-3xl font-bold mb-4">About</h2>
                    <p className="text-gray-700">
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                <div className="p-4 md:p-8">
                    <div className="flex flex-col md:flex-row justify-start items-start gap-4">
                        <div className="w-full md:w-1/3">
                            <img
                                src="assets/img/my-profile-img.jpg"
                                alt=""
                                className="w-full h-auto rounded-md shadow"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-xl md:text-2xl font-semibold mt-4 md:mt-0">
                                UI/UX Designer &amp; Web Developer.
                            </h2>
                            <p className="fst-italic py-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span>
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span>
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span>
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className='list-unstyled'>
                                        <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span>
                                        </li>
                                        <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                                        </li>
                                        <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span>
                                        </li>
                                        <li className='mb-2'>
                                            <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page;