import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UpdateEmployee = () => {

    const [data,setData]=useState({});
    const {employee_id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:8080/v1/employees/'+ employee_id)
     .then(res=>setData(res.data))  
     },[employee_id])

    const handleUpdate=async()=>{
          await axios.put('http://127.0.0.1:8080/v1/employees/'+ employee_id,data,{
          headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }}
          )
          .then((res) => {
            alert("Updated successfully")
          })
          .catch((error) => {
            alert(error)
          })
    }


  return (
    <div className='container'>
        <form className='card'>
            <div className="form-group row my-3">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">EmpID</label>
                <div className="col-sm-10">
                <input type="number" readOnly className="form-control-plaintext" value={data.employee_id || ''}/>
                </div>
            </div>
            <div className="form-group row  my-3">
                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control col-75" 
                defaultValue={data.name || ''} onChange={(e)=>setData({...data , name: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row  my-3">
                <label htmlFor="username" className="col-sm-2 col-form-label">UserName</label>
                <div className="col-sm-10">
                <input type="text" className="form-control col-75"
                defaultValue={data.username } onChange={(e)=>setData({...data , username: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row  my-3">
                <label htmlFor="designation" className="col-sm-2 col-form-label">Designation</label>
                <div className="col-sm-10">
                <input type="text" className="form-control col-75"
                defaultValue={data.designation } onChange={(e)=>setData({...data , designation: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row my-3">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input type="email" className="form-control col-75"
                defaultValue={data.email } onChange={(e)=>setData({...data , email: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row my-3">
                <label htmlFor="phnumber" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                <input type="number" className="form-control col-75"
                defaultValue={data.phnumber } onChange={(e)=>setData({...data , phnumber: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row my-3">
                <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
                <div className="col-sm-10">
                <input type="text" className="form-control col-75"
                defaultValue={data.nationality } onChange={(e)=>setData({...data , nationality: e.target.value})}
                />
                </div>
            </div>
            <div className="form-group row my-3">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                <input type="textArea" className="form-control col-75"
                defaultValue={data.address } onChange={(e)=>setData({...data , address: e.target.value})}
                />
                </div>
            </div>
            <div><button className='btn btn-outline-success' onClick={(e)=>handleUpdate()}>Update</button></div>
        </form>
        
        <div className='my-3'><Link className="btn btn-outline-primary" to="/">Back to Listing</Link></div>
    </div>
  )
}

export default UpdateEmployee