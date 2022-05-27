const bcrytp = require('bcrypt');
const User = require('../models/user');


exports.signup = async(req,res,next) =>{
    try {
        const {username, password} = req.body;
        console.log(req.body);
        const salt = 10;
        bcrytp.genSalt(salt,function(err,saltRound){
            bcrytp.hash(password,saltRound,function(err,hashPassword){
                if(err){
                    res.json({msg:'Something Went Wrong'})
                }
                const user = User.create({username,password:hashPassword});
                if(user){
                return res.status(201).json({msg:"UserCreated",succes:true});
                }
            })
        })
    } catch (error) {
        return res.status(401).json({msg:"Something Went Wrong", success:false})
    }
}