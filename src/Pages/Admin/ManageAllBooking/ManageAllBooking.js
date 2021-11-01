import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllBooking = () => {
    const [allBookings,setAllBookings] = useState([])
    useEffect(()=>{
        axios.get(`https://enigmatic-badlands-77087.herokuapp.com/allBookings`)
        .then(res=>{
            setAllBookings(res.data);
        })
    },[])
    
    // Approve
    const handleApprove = id =>{
        axios.put(`https://enigmatic-badlands-77087.herokuapp.com/bookingUpdate/${id}`,{})
        .then(res=>{
            console.log(res);
        })
    }

    // Delete
    const handleDelete=id=>{
        const proceed = window.confirm("Are you sure ? you want to delete ?")
        if(proceed){
            axios.delete(`https://enigmatic-badlands-77087.herokuapp.com/myBooking/${id}`)
            .then(res=>{
                if(res.data.acknowledged){
                alert("Delete Done")
                }
                const remain = allBookings.filter(book=>book._id !== id)
                allBookings(remain)
            })
        }
    }
    return (
        <div>
            <h2>Manage All Bookings</h2>

            <div className="row">
                    {
                        allBookings.map(book=> <div className="col-md-5 m-2 bg-info rounded">
                            <div className="row d-flex align-items-center p-2">
                                <div className="col-md-4">
                                    <img src={book.img} alt="" width="150px" className="rounded" />
                                </div>
                                <div className="col-md-8">
                                    <h2>{book.package}</h2>
                                    <p>{book.email}</p>
                                    <button onClick={()=>{handleApprove(book._id)}}>Make Approved</button>
                                    <button onClick={()=>handleDelete(book._id)} className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

        </div>
    );
};

export default ManageAllBooking;