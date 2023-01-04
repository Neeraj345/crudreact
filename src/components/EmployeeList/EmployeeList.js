import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmployeeList = () => {
    const [empdata,setEmpData]=useState(null)
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }

    const LoadEdit = (id) => {
        navigate("/employee/update/" + id);
    }

    const Removefunction = (id) => {
        if (window.confirm('Do you want to delete?')) {
            fetch("http://localhost:8080/v1/employees/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Deleted successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(()=>{
        fetch("http://localhost:8080/v1/employees")
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setEmpData(res)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>EmployeeList</h2>
            </div>
            <div className='card-body'>
            <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>Name</td>
                            <td>EmpID</td>
                            <td>Designation</td>
                            <td>Email</td>
                            <td>Country</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        empdata&&empdata.map(emp=>(
                            <tr key={emp.employee_id}>
                                <td>{emp.name}</td>
                                <td>{emp.employee_id}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.email}</td>
                                <td>{emp.nationality}</td>
                                <td>
                                    <button onClick={() => { LoadDetail(emp.employee_id) }} className="btn btn-outline-primary">Details</ button>
                                    <button onClick={() => { LoadEdit(emp.employee_id) }} className="btn btn-outline-success">Update</button>
                                    <button onClick={() => { Removefunction(emp.employee_id) }} className="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                            
                        ))
                    }
                    </tbody>

                </table>
            </div>

        </div>
      
    </div>
  )
}

export default EmployeeList
