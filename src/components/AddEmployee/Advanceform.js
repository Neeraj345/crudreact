import React from 'react'

function Advanceform({formData,setformData,error,setError,invalid,isValidEmail}) {

  return (
    <div className='container' style={{"textAlign":"left"}}>
        <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" 
                value={formData.email} onChange={(e)=>setformData({...formData, email:e.target.value})}
        />
        {error&&formData.email.length<=0?
               <label className='error'><small>Empty Field &nbsp;</small></label>:""}
        {invalid &&!isValidEmail(formData.email)?
               <label className='error'><small>invalid email</small></label>:""}
        </div>

        <div className="mb-3">
                <label htmlFor="phnumber" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="phnumber" required
                value={formData.phnumber} onChange={(e)=>setformData({...formData, phnumber:e.target.value})}
                />
        {error&&formData.phnumber.length<=0? <label className='error'><small>Empty Field</small></label>:""}
        </div>
        
        <div className="mb-3">
                <label htmlFor="nationality" className="form-label">Nationality</label>
                <input type="text" className="form-control" id="nationality" required
                value={formData.nationality} onChange={(e)=>setformData({...formData, nationality:e.target.value})}
                />
                {error&&formData.nationality.length<=0? <label className='error'><small>Empty Field</small></label>:""}
        </div>

        <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea className="form-control" rows="3" required
                    value={formData.address} onChange={(e)=>setformData({...formData, address:e.target.value})}
                    />
                {error&&formData.address.length<=0? <label className='error'><small>Empty Field</small></label>:""}            
        </div>
   

    </div>
  )
}

export default Advanceform
