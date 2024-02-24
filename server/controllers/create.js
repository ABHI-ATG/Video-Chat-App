const bcrypt=require("bcrypt")

const create=async(req,res)=>{
    try{        
        const salt=await bcrypt.genSalt(6);
        const code=await bcrypt.hash(req.body.email,salt);
        console.log(code);
        return res.json({msg:"Success",code:code});

    }catch(error){
        return res.json({ status: false, msg: " Couldn't create account" });
    }
}

module.exports=create;