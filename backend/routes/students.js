const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    let newStudent = new Student();
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.email = email;
    newStudent.password = password;
    
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("update/:id").put(async(req,res)=>{
    let userId = req.params.id;
    
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;


    let updateStudent = new Student();
    updateStudent.firstName = firstName;
    updateStudent.lastName = lastName;
    updateStudent.email = email;
    updateStudent.password = password;

    const update = await Student.findByIdAndUpdate(userId , updateStudent).then(()=>{
        res.status(200).send({status:"user updated",user: update })
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"error with updated data"});
    })   

})



router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await Student.findByIdAndRemove(userId).then(()=>{
        res.status(200).send({status:"user deleted"}); 
    }).catch((err)=>{
        res.status(500).send({status:"error with delete data", error: err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    const user = await Student.findById(userId).then(()=>{
        res.status(200).send({status:"user fetched", user:user})
    }).catch((err)=>{
        res.status(500).send({status:"error with get user", error: err.message});
    })
})


//login
router.route("/login").post(async (req,res)=>{


    console.log(req.body);
    
    const email = req.body.email;
    const password = req.body.password;


    

    const result = await Student.findOne({email:email,password:password});
    if (result) {
        res.status(200).json("success");
    } else {
        res.status(400).json("invalid");
        
    }
})



module.exports = router;