import React from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contact.css';

const Contact = () => {
    const {user}=useAuth();
    return (
        <div>
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>Contact Us</h5>
                    <div className="divider"></div>
                    <h1>Get In Touch</h1>
                </div>
            </div>

            <div className="container py-4 my-4">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="fas fa-phone-volume"></i>
                            <h5>Call Us</h5>
                            +88-234-6588
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="far fa-envelope"></i>
                            <h5>Email Us</h5>
                            support@medicare.com
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="fas fa-directions"></i>
                            <h5>Location</h5>
                            Joypurpara,Dupchanchia,Bogura-5880
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}

            <section className="contact-form-wrap section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h2 className="text-md mb-2">Contact us</h2>
                                <div className="divider mx-auto my-4"></div>
                                <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact form */}
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <form id="" className="py-4" method="" action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="name" value={user.name||user.displayName} id="name" type="text" className="form-control" placeholder="Your Full Name" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="email" value={user.email} id="email" type="email" className="form-control" placeholder="Your Email Address"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group-2 mb-4">
                            <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message"></textarea>
                        </div>

                        <div className="text-center">
                            <input className="btn btn-primary btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                        </div>
                    </form>
                </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Contact;