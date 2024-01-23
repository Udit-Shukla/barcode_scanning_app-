const User = require('../Models/User');
const bcrypt=require('bcrypt');
//controller to create user 
exports.createUser =async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        
        //validating user inputs 
        if(!username || !email || !password){
            return res.status(400).json({
                status:false,
                message:"Please provide all the required fields"
            })
        }

        //checking if user already exists
        const userExists=await User.findOne({username:username});
        if(userExists){
            return res.status(400).json({
                status:false,
                message:"User already exists"
            })
        }

        //hashing the password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        //generating random id
        const id=Math.floor(Math.random()*10000);

        //generating profile picture from initials
        const profilePic=`https://api.dicebear.com/7.x/initials/svg?seed=${username}`;

        //creating new user
        const newUser=await User.create({
            id:id,
            username:username,
            email:email,
            password:hashedPassword,
            profilePicture:profilePic,
        })

        //sending response
        res.status(201).json({
            status:true,
            message:"User created successfully",
            data:newUser
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:false,
            message:"Error while creating user ",
            error:error.message
        })
    }
}

//controller to login user
exports.userLogin =async(req,res)=>{
    try {
        const {username,password}=req.body;

        //validating user inputs
        if(!username || !password){
            return res.status(400).json({
                status:false,
                message:"Please provide all the required fields"
            })
        }

        //checking if user exists
        const existingUser = await User.findOne({username:username});
        if(!existingUser){
            return res.status(400).json({
                status:false,
                message:"User does not exist"
            })
        }

        //checking if password is correct
        const passwordCorrect=await bcrypt.compare(password,existingUser.password);
        if(!passwordCorrect){
            return res.status(400).json({
                status:false,
                message:"Invalid credentials"
            })
        }

        //sending response
        res.status(200).json({
            status:true,
            message:"User logged in successfully",
            data:existingUser
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:false,
            message:"Error while logging in user ",
            error:error.message
        })
    }
}


//controller to delete user 
exports.deleteUser =async(req,res)=>{
   try {
    const {id}=req.params;

    //validating user inputs
    if(!id){
        return res.status(400).json({
            status:false,
            message:"Please provide all the required fields"
        })
    }

    //checking if user exists
    const existingUser = await User.findOne({id:id});
    if(!existingUser){
        return res.status(400).json({
            status:false,
            message:"User does not exist"
        })
    }

    //deleting user
    await User.findOneAndDelete({id:id});

    //sending response
    res.status(200).json({
        status:true,
        message:"User deleted successfully",
    })



   } catch (error) {
    console.log(error)
    res.status(500).json({
        status:false,
        message:"Error while deleting user ",
        error:error.message
    })
   }
}