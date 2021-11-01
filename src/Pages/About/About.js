import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './About.css';

const About = () => {

    return (
        <div className="text-start">
            <Header/>
            <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    <h5>About us</h5>
                    <div className="divider"></div>
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="container p-4 my-4">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="title-color">Personal care for your healthy living</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>MediCare HealthCare was established in 1964 and has grown to become a global hospital group operating 480 facilities across 11 countries, making it one of the largest and most diverse private healthcare companies in the world.</p>
                        <img src="https://i.ibb.co/ZBJ3fWb/sign.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>

            

            {/* awards */}
            <div className="container py-4 my-4">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <h2 className="title-color">Our Doctors achievements </h2>
                        <div className="divider mt-4 mb-5 mb-lg-0"></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/GVbvyJx/1.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/hdM4cpt/2.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/wzmbxwx/6.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/w7w0dW5/5.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/YdVNzCf/3.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="award-img">
                                    <img src="https://i.ibb.co/JpHtJxC/4.png" alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <Footer/>
        </div>
    );
};

export default About;