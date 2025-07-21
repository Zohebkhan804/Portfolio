'use client';

const page = () => {
    return (
        <>
            <section id="contact" className="contact section">
                <div className='container section-title'>
                    <h2>Contact</h2>
                    <p>For any project discussions or professional inquiries, please get in touch with Zoheb Khan using the contact details below.</p>
                </div>
                <div className='container'>
                    <div className='row gy-4'>
                        <div className='col-lg-5'>
                            <div className='info-wrap'>
                                <div className='info-item d-flex'>
                                    <i className='bi bi-geo-alt flex-shrink-0'></i>
                                    <div>
                                        <h3>Address</h3>
                                        <p>Roshan Gate Maqsood colony near by perfect couching classes. Aurangabad , Maharashtra -431001..</p>
                                    </div>
                                </div>
                                <div className='info-item d-flex'>
                                    <i className='bi bi-geo-alt flex-shrink-0'></i>
                                    <div>
                                        <h3>Call Us</h3>
                                        <p>+91 9970538128</p>
                                    </div>
                                </div>
                                <div className='info-item d-flex'>
                                    <i className='bi bi-geo-alt flex-shrink-0'></i>
                                    <div>
                                        <h3>Email Us</h3>
                                        <p>zoheb.khan3006@gmail.com</p>
                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.340585155644!2d75.34048296992687!3d19.887955385100113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2a116ce90ed%3A0xd8f7b5b641f0f71b!2sRoshan%20Gate%2C%20Sharif%20Colony%2C%20Jaswantpura%2C%20Chhatrapati%20Sambhajinagar%2C%20Maharashtra%20431003!5e1!3m2!1sen!2sin!4v1753094833969!5m2!1sen!2sin" frameBorder={0} style={{ border: 0, width: '100%', height: 270 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            {/* forms */}
                            <form action="forms/contact.php" method="post" className="php-email-form">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" id="name-field" className="form-control" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email-field" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject-field" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" rows={10} id="message-field" required defaultValue={""} />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page