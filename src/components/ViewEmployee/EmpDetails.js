import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetails = () => {
    const { employee_id } = useParams();
    const [empdata, setEmpData] = useState({});

    useEffect(() => {
        fetch("http://localhost:8080/v1/employees/" + employee_id).then((res) => {
            return res.json();
        }).then((res) => {
            setEmpData(res);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [employee_id]);
    return (
        <div>
            <div className="container">
            <div className="card row">
                <div className="card-title">
                    <h2>EMPLOYEE DETAILS</h2>
                </div>
                <div className="card-body">
            <table className="table table-bordered">
            <tbody style={{ "textAlign": "left" }}>
                <tr>
                <td><h5>Name</h5></td>
                <td><h5>{empdata.name}</h5></td>
                </tr>
                <tr>
                <td><h5>UserName</h5></td>
                <td ><h5>{empdata.username}</h5></td>
                </tr>
                <tr>
                <td><h5>Employee ID</h5></td>
                <td><h5>{empdata.employee_id}</h5></td>
                </tr>
                <tr>
                <td><h5>Designation</h5></td>
                <td><h5>{empdata.designation}</h5></td>
                </tr>
                <tr>
                <td><h5>Email</h5></td>
                <td><h5>{empdata.email}</h5></td>
                </tr>
                <tr>
                <td><h5>Phone</h5></td>
                <td><h5>{empdata.phnumber}</h5></td>
                </tr>
                <tr>
                <td><h5>Nationality</h5></td>
                <td><h5>{empdata.nationality}</h5></td>
                </tr>
                <tr>
                <td><h5>Address</h5></td>
                <td><h5>{empdata.address}</h5></td>
                </tr>
            </tbody>
            </table>
            </div>

            </div>
            <Link className="btn btn-outline-primary my-3" to="/">Back to Listing</Link>

        </div>
        </div >
    );
}

export default EmpDetails;