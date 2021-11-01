import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Service.css';

const Service = () => {
    const {id}=useParams();
    const [item,setItem] = useState({})
    useEffect(()=>{
        axios.get(`https://enigmatic-badlands-77087.herokuapp.com/package/${id}`)
        .then(res=>{
            setItem(res.data);
        })
    },[])
    return (
        <>
        <Header/>
        <div className="section-header">
            <div className="d-flex justify-content-center align-items-center flex-column"> 
                <h5>Package Details</h5>
                <div className="divider"></div>
                <h1>{item.title}</h1>
            </div>
        </div>

        
        <section className="my-4 py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="department-img">
                            <img src={item.img_1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="row my-4">
                    <div className="col-md-8">
                        <div className="text-start mt-5">
                            <h3 className="text-md">{item.title}</h3>
                            <div className="divider my-4"></div>
                            <p className="lead">{item.description}</p>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12"></div>
                        <div className="my-4">
                            <Link to={`/book/${item._id}`}>
                                <button className="btn btn-primary d-flex justify-content-between align-items-center">
                                    <span>Book Now</span> 
                                    <i className="ps-2 fas fa-chevron-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
        <Footer/>
        </>
    );
};

export default Service;