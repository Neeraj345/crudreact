import React from 'react'

function Basicform({formData,setformData}) {
  return (
    <div className='container' style={{"textAlign":"left"}}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name"
                value={formData.name} onChange={(e)=>setformData({...formData, name:e.target.value})}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username"
                value={formData.username} onChange={(e)=>setformData({...formData, username:e.target.value})}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="employee_id" className="form-label">Employee ID</label>
                <input type="number" className="form-control" id="employee_id"
                value={formData.employee_id} onChange={(e)=>setformData({...formData, employee_id:e.target.value})}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="designation" className="form-label">Designation</label>
                <input type="text" className="form-control" id="designation"
                 value={formData.designation} onChange={(e)=>setformData({...formData, designation:e.target.value})}
                />
            </div>
    </div>
  )
}

export default Basicform
