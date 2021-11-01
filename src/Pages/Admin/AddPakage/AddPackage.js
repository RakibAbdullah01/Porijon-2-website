import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddPackage = () => {
    const {register,handleSubmit, formState: { errors },} = useForm();
      const onSubmit = (data) => {
        console.log(data);
          axios.post(`https://enigmatic-badlands-77087.herokuapp.com/pakages`,data)
          .then(res=>{
              console.log(res);
          })
          
      };
    return (
            <>
            <div className="bg-info my-2 p-4 w-75 rounded mx-auto" >
                <h2 className="text-light">Add New Pakage</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">

                    <div className="col-md-6">
                        <input
                            {...register("title")}
                            placeholder="Pakage Title"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-6">
                        <input
                            {...register("location")}
                            placeholder="Tour Location"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-12">
                    <textarea
                            {...register("description")}
                            placeholder="Descriptions"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    <div className="col-md-12">
                        <input
                            {...register("img_1")}
                            placeholder="Image URL 1"
                            className="p-2 m-2 w-100 rounded border-1"
                        />
                    </div>

                    
              </div>
              
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-success w-25" />
            </form>
                

            </div>
        </>
    );
};

export default AddPackage;