import React, { useState } from 'react'
import Advanceform from './Advanceform';
import Basicform from './Basicform';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function MainForm() {
    const [page,setPage]=useState(0);
    const [error,setError]=useState(false)
    const [invalid, setinvalid] = useState(false);
    const navigate=useNavigate();

    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    const [formData,setformData]=useState({
        name:'',
        username:'',
        employee_id:'',
        designation:'',
        email:'',
        phnumber:'',
        nationality:'',
        address:''
    });

    const FormTitles = ["Basic Details","Advance Details"];

    const PageDisplay=()=>{
            if(page===0)
                return <Basicform formData={formData} setformData={setformData}/>
            else 
                return <Advanceform formData={formData} setformData={setformData} error={error} invalid={invalid} isValidEmail={isValidEmail} />
    }

    const postData=()=>{
      axios.post('http://localhost:8080/v1/employees/', formData)
      .then((res) => {
        alert("Employee Added Successfully")
         navigate('/');
      })
      .catch((error) => {
        alert(error)
      })
    }

  return (
    <div className='container'>
    <div className='card'>
        <div className='header'>
           <center> <h1>{FormTitles[page]}</h1></center>
        </div>
        <div className='my-4'>
            {PageDisplay()}
        </div>
        <div className='container'>
        <center>
    <div className="fixed my-4">

    {page === FormTitles.length - 1 && <button  className="btn btn-primary mx-4" disabled={page===0}
         onClick={()=>{setPage((currPage)=> currPage -1)}}
        >Back</button>}

       <button  className="btn btn-primary mx-4"  disabled={(formData.name ==='' || formData.username==='' || formData.employee_id==='' || formData.designation==='')}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                    if(formData.email==='' || formData.phnumber==='' || formData.nationality==='' || formData.address===''){
                            setError(true)     
                    }
                    else if(!isValidEmail(formData.email)){
                          setinvalid(true)
                    }   
                    else{
                            postData()
                    }
                  
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        </center>
        <Link to='/' className='btn btn-danger'>Cancel</Link>
    </div>
    </div>
    </div>
  )
}

export default MainForm
