import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
//import Popup from 'reactjs-popup';
import { useReactToPrint} from 'react-to-print';

function AppoinmentDetailsManagement() {

    const [Appoinmentdetails, setAppoinmentdetails] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const componentPDF = useRef();

    useEffect(() => {
        axios.get(`http://localhost:8070/appointment/`)
            .then((Appoinmentdetails) => {
                setAppoinmentdetails(Appoinmentdetails.data);
                console.log(Appoinmentdetails.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);


    {/*function deleteMovie(id) {
        axios.delete(`http://localhost:8070/appointment/delete/${id}`)
            .then(() => {
                alert("Deleted Successfully");
            }).catch((err) => {
                alert("error : " + err);
            });
        window.location.reload();
    }*/}

    const generatePDF = useReactToPrint({
        content: () =>componentPDF.current,
        documentTitle:"Patientdetails",
        onAfterPrint:()=>alert("Data saved in PDF"),
       

    });

    const filteredAppoinmentDetails = Appoinmentdetails.filter(appointment => appointment.id.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return (


        
        <div>
            <div className="container">
            <div className=" display-table mt-5 ">
                <div className="row display-table-row mt-5">
                    <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div className="logo">


                        </div>
                        <h3 style={{ color: "white" }}><b>Admin Panel</b></h3>
                        
                    </div>
                    <div className="col-md-10 col-sm-11 display-table-cell v-align">

                        <div className="row mb-4">
                            <header>
                                <div className="col-md-7">
                                    <nav className="navbar-default pull-left">
                                        <div className="navbar-header">
                                            <div className="header">

                                                {/*---- Include the above in your HEAD tag --------*/}

                                                {/* Navigation */}
                                                
                                            </div>
                                        </div>
                                    </nav>

                                </div>
                                <div className="col-md-5">
                                    <div className="header-rightside">

                                    </div>
                                </div>
                            </header>


                        </div>

                        <div className='container-table100'>

                            <header class="bg-dark py-5">
                                <div class="container px-4 px-lg-5 my-5">
                                    <div class="text-center text-white">
                                        <h1 class="display-4 fw-bolder">Manage Appointment  </h1>
                                        <p class="lead fw-normal text-white-50 mb-0">Appointment Details</p>
                                    </div>
                                </div>
                            </header>
                            <br></br>
                            <br></br>

                            <input type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                            <br></br>
                            <br></br>

                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="/add" class="btn btn-primary btn-lg active" role="button" aria-pressed="true" >ADD New Appointment</a>


                            </div>
                            <br></br>
                            <br></br>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="table-wrap">
                                    <div ref={componentPDF} style={{width:'100%'}}>
                                        <table class="table" border="1">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th scope="col">id</th>
                                                    <th scope="col">name</th>
                                                    <th scope="col">age</th>
                                                    <th scope="col">gender</th>
                                                    <th scope="col">DOB</th>
                                                    <th scope="col">address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    filteredAppoinmentDetails.map((val, key) => {
                                                        return (
                                                            <tr>
                                                                <td style={{ width: "100px" }}>{val.id}</td>
                                                                <td style={{ width: "100px" }}>{val.name}</td>
                                                                <td style={{ width: "100px" }}>{val.age}</td>
                                                                <td style={{ width: "100px" }}>{val.gender}</td>
                                                                <td style={{ width: "100px" }}>{val.DOB}</td>
                                                                <td style={{ width: "100px" }}>{val.address}</td>
                                                               
                                                                {/*<td style={{ width: "   " }}><a href={`/update/` + val._id} className='btn btn-warning '>Update</a>
                                                                    <Popup
                                                                        trigger={<button className="btn btn-danger"> Delete </button>}
                                                                        modal
                                                                        nested
                                                                    >
                                                                        {close => (
                                                                            <div className="container-fluid" style={{ padding: 5 }}>



                                                                                <div className="h-100 p-5 bg-light border rounded-3">
                                                                                    <h1 className="card-title">Delete This Field ?</h1>
                                                                                    <div className>
                                                                                        <br></br>
                                                                                        <button
                                                                                            className="btn btn-success"
                                                                                            onClick={() => {
                                                                                                console.log('modal closed ');
                                                                                                close();
                                                                                            }}
                                                                                        >
                                                                                            Cancle
                                                                                        </button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                                                        <button className='btn btn-danger' onClick={() => deleteMovie(val._id)}>Delete</button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </Popup>
                                                                   


                                                                                        </td>*/}

                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div >
                                    <div>
                                        <button className="btn btn-success" onClick={generatePDF}>PDF</button>{/*<Link to={`/GeneratePDF`} className='btn btn-success btn-sm mr-10' onChange={() =>generatePDF(val._id)}>PDF</Link>*/}
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div >

                        {/* our code */}



                    </div>
                </div>

            </div>
        </div>




        </div>












    );

                                            }                                         

export default AppoinmentDetailsManagement;