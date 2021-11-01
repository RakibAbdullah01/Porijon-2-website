import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = () => {
    return (
        <div className="text-start">
           
            
            {/* About */}
            <section className="my-4 py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img">
                                <img src="https://i.ibb.co/khnJ0qb/img-1.jpg" alt="" className="img-fluid" />
                                <img src="https://i.ibb.co/PhdJxcm/img-2.jpg" alt="" className="img-fluid mt-4" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="about-img mt-4 mt-lg-0">
                                <img src="https://i.ibb.co/6XVW0M8/img-3.jpg" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ps-4 mt-4 mt-lg-0">
                                <h2 className="text-primary fs-1">Personal care <br/>& healthy living</h2>
                                <p className="mt-4 mb-5">Our rapid access Saturday service for children and adolescents who have experienced sports and orthopaedic injuries and need fast access to diagnostics and treatment. </p>

                                <Link to="/about" className="text-decoration-none">
                                        <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                            <span>About Us</span> 
                                            <i className="ps-2 fas fa-chevron-right"></i>
                                        </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Appoinment */}
                <div className="container py-4 my-4">
                    <div className="row align-items-center bg-info p-4">
                        <div className="col-lg-6 ">
                            <div className="appoinment-content p-4">
                                <div className="emergency">
                                    <div className="text-lg text-center text-white">
                                        <i className="fas fa-phone-volume fs-3"></i>
                                        <h3>Call Now</h3>
                                        <span>+88-234-6588</span>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-10 ">
                            <div className="appoinment-wrap mt-5 mt-lg-0 text-white">
                                <h2 className="mb-2 title-color">Check our Packages</h2>
                                <p className="mb-4">Book your Hotel in Hospital online. No reservation costs. Great rates. Read Real Guest Reviews. Get Instant Confirmation. Apartments. No Booking Fees.</p>
                                <Link to="/service">
                                    <button className=" btn btn-primary d-flex justify-content-between align-items-center">
                                        <span>Book Now</span> 
                                        <i className="ps-2 fas fa-chevron-right"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Content;