const getCurrentUser = ((req,res)=>{
    res.json({message:"Current user Information"});
});

const postLoginUser = ((req,res)=>{
    res.json({message:"Login User"});
});

const postRegisterUser = ((req,res)=>{
    res.json({message:"Register the user"});
});


module.exports = {getCurrentUser,postLoginUser,postRegisterUser};