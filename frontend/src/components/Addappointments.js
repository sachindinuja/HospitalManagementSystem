import React,{useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Addappointments() {

    const navigate = useNavigate();

    const [id, setid] = useState("");
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [DOB, setDOB] = useState("");
    const [address, setaddress] = useState("");
    
   
    function sendData(event ) {
        event.preventDefault();

        const newAppointment = {
            id, 
            name, 
            age, 
            gender, 
            DOB, 
            address, 
            

        }
        axios.post("http://localhost:8070/Appointment/add",newAppointment).then(()=>{
      alert("Appointmentadded")
            setid("");
            setname("");
            setage("");
            setgender("");
            setDOB("");
            setaddress("");
            /*navigate('/ManageItems')*/
        }).catch((err)=>{
            alert(err)
        })
    }
 

    return (
       
        <div className='d-flex w-100 vh-80 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <div className="container">

        <form action = {"/ManageItems"} onSubmit={sendData} >

        <div className="mb-3">
          <label for="id" class="form-label">Patient ID</label>
          <input type="id" class="form-control" id="id" placeholder="enter your id" onChange={(e)=>{
            setid(e.target.value);
          }}/>
          </div>

        <div className="mb-3">
          <label for="name" class="form-label">Patient name</label>
          <input type="name" class="form-control" id="age" placeholder="Enter your"onChange={(e)=>{
            setname(e.target.value);
          }}/>

          
        </div>
        <div className="mb-3">
          <label for="Age" class="form-label">Patient Age</label>
          <input type="Number" class="form-control" id="age" placeholder="Enter your age"onChange={(e)=>{
            setage(e.target.value);
          }}/>
        </div>

        <div className="mb-3">
          <label for="gender" class="form-label">Patient gender</label>
          {/*<select name="gender" className="From-control">
          <option value="">--please select--</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>*/}
          {<input type="gender" class="form-control" id="gender" placeholder="Enter your age"onChange={(e)=>{
            setgender(e.target.value);
          }}/>}


        </div>
        
        <div className="mb-3">
          <label for="DOB" class="form-label">Patient DOB</label>
          <input type="date" class="form-control" id="DOB" placeholder="Enter your Date of birth"onChange={(e)=>{
            setDOB(e.target.value);
          }}/>
          
        </div>

        <div className="mb-3">
          <label for="exampleaddress" class="form-label">Patient address</label>
          <input type="address" class="form-control" id="address" placeholder="Enter your address"onChange={(e)=>{
            setaddress(e.target.value);
          }}/>
        </div>
        
           
            
            <button type="submit" class="btn btn-primary">Enter</button>
                
            
            </form>
            
            </div>

            </div>
            </div>     
    )
}