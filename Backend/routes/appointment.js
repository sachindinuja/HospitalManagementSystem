
const router = require("express").Router();
const { deleteModel } = require("mongoose");
let appointment = require("../models/appointment");


//http://localhost:8070/appointment/add
router.route("/add").post((req,res)=>{

    const id = req.body.id;
    const name = req.body.name;
    const age =Number(req.body.age);
    const gender = req.body.gender;
    const DOB =req.body.DOB;
    const address=req.body.address;

    const newappointment = appointment ({
        id,
        name,
        age,
        gender,
        DOB,
        address,

    })

    newappointment.save().then(()=>{
        res.json("appointment Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//data retrive
router.route("/").get((req,res)=>{
    appointment.find().then((appointment)=>{
        res.json(appointment)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async (req,res)=>{
    let Id = req.params.id;
    const {id, name, age, gender,DOB,address} = req.body;

    const updateappointment = {
        id,
        name,
        age,
        gender,
        DOB,
        address
    }
    const update = await appointment.findByIdAndUpdate(Id, updateappointment).then(()=>{
        res.status(200).send({status: "User updated"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: "Error with updating data",error: err.message});
    }) 
})
    router.route("/delete/:id").delete(async (req,res)=>{
        let Id = req.params.id;

        await appointment.findByIdAndDelete(Id).then(()=>{
        res.status(200).send({status: "User deleted", user: update});
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({status: "Error with delete user",error: err.message});
    }) 
})        
    router.route("/get/:id").get(async(req,res)=>{
        let Id = req.params.id;
        const user = await appointment.findByIdAndDelete(Id).then((appointment)=>{
        res.status(200).send({status: "User fetched",appointment})
        }).catch(()=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user",error: err.message});
        })
    
    
})

module.exports=router;