const mongoose  = require ('mongoose');
const Schema  = mongoose.Schema;
const appointmentSchema =new Schema({

id :  {
    type:String,
    requierd:true

},
 name: {
    type :String,
    requierd:true
    
},
age :  {
    type:Number,
    requierd:true
    
},
 gender:  {
    type:String,
    requierd:true
    
},


    DOB:{
        type:String,
        requierd:true
},  
    address:{
        type:String,
        requerd:true
    }


}

)
const Appointment = mongoose.model('Appointment',appointmentSchema);

module.exports=Appointment;