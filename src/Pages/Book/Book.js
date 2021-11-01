import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Book.css';


const Book = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const [item, setitem] = useState({})
    useEffect(() => {
        axios.get(`https://enigmatic-badlands-77087.herokuapp.com/package/${id}`)
        .then(res=>{
            setitem(res.data)
        })
    }, [])
    
    
    const {register,handleSubmit, formState: { errors },reset} = useForm();
      const onSubmit = (data) => {
          console.log(data);
          data.status = "Pending";
          data.img = item?.img_1;

          axios.post(`https://enigmatic-badlands-77087.herokuapp.com/myBooking`,data)
          .then(res=>{
              if(res.data.acknowledged){
                alert(`Thank you ${user.displayName}. Your Booking Number ${res.data.insertedId} `)
                reset()
              }
          });
          
      };

    return (
        <>
        <Header/>

        <div className="section-header">
                <div className="d-flex justify-content-center align-items-center flex-column"> 
                    
                    <h5>Book your Seat</h5>
                    <div className="divider"></div>
                    <h1>Book</h1>
                </div>
            </div>


            <Container className="my-4 pb-4">
                <Row className="d-flex align-items-center">
                    <div className="col-md-4">
                        <div className="mt-3">
                            <div className="mb-3">
                                <i className="fas fa-phone-volume fs-1 text-lg"></i>
                            </div>
                            <span className="h3">Call for an Emergency Service!</span>
                            <h2 className="text-color mt-3">+84 789 1256 </h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="bg-info my-2 p-4 w-75 rounded mx-auto" >
                            <h2 className="text-light">Book Now</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">

                                    <div className="col-md-6">
                                        <input
                                            {...register("name")}
                                            value={user.displayName}
                                            placeholder="Name"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            {...register("email")}
                                            value={user.email}
                                            placeholder="Email"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <input
                                            {...register("phone")}
                                            placeholder="Phone"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-8">
                                        <input
                                            {...register("address")}
                                            placeholder="Address"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-12">
                                    <input
                                            {...register("package")}
                                            value={item?.title}
                                            placeholder="Package"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            {...register("type")}
                                            value={item?.type}
                                            placeholder="Type"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>


                                    <div className="col-md-6">
                                        <input
                                            type="date"
                                            {...register("date")}
                                            placeholder="Date"
                                            className="p-2 m-2 w-100 rounded border-1"
                                        />
                                    </div>
                            </div>
                            
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Book Now" className="btn btn-success w-25" />
                            </form>
                                

                            </div>
                           
                    </div>
                </Row>
            </Container>
        <Footer/>
        </>
    );
};

export default Book;