const {User}  = require("../db");
const zod = require("zod")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
JWT_SECRET = 'fbhjrsdnckzcueribnvejskzcnk4389w732';
const express = require('express');
const router = express.Router();

const signupbody = zod.object({
    username : zod.string().email(),
    firstName : zod.string(),
    lastName : zod.string(),
    password : zod.string().min(6)
});

router.post('/signup', async (req,res) => {
    const {success} = signupbody.safeParse(req.body);
    if (!success){
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    } 
    console.log(req.body.username);

    const existingUser = await User.findOne({
        username : req.body.username,
    });
   

    if(existingUser){
         return res.status(411).json({
            message : "Email already taken",
        })
    }

    const newuser = User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        })

    //hashing
    var hashedPassword = await newuser.createHash(req.body.password);
    newuser.password_hash = hashedPassword;
    try{
        await newuser.save();
    
        const userId = newuser._id;
        const token = jwt.sign({
            userId
            }, JWT_SECRET);
    
        return res.status(201).json({
            message: "User created successfully",
            token : token
            })
    }catch(error){
        return res.status(500).json({
            message: "Error creating user",
            error: error.message
        })
   

}})

const signinbody = zod.object({
    username : zod.string(),
    password : zod.string().min(6)
})

router.post('/signin',async (req,res) => {
    const result = signinbody.safeParse(req.body);
    
    if(!result.success) {
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    }
    try{
        const user =  await User.findOne({
            username : req.body.username
        })
        if(!user){
            return res.status(411).json({
                message  : "User does not exist ,Please signup"
            })
        }else {
            try{
            if( await argon2.verify(user.password_hash,req.body.password))
            {
                const token = jwt.sign({
                    userId: user._id
                    }, JWT_SECRET);
    
                return res.status(200).json({
                    message: "User Successfully Logged In",
                    token : token
                })
            } else
            {
                return res.status(400).json({
                    message: "Incorrect Password",
                  });
            }}catch(error){
                console.error("Error during password verification:", error);
                return res.status(500).json({
                    message: "Internal server error"
                });
            }
        }
    }catch(error){  
        console.error("Error fetching user data:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
        
    
    


})