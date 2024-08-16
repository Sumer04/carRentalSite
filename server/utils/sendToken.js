const sendToken = (newUser,message,statusCode,res)=>{
    const token =  newUser.generateToken();
    const tokenOptions={
        expires:new Date(Date.now()+30*24*60*1000),
        httpOnly:true,
        sameSite:"none",
        secure:true,
    };
    res.status(Number(statusCode)).cookie("token",token,tokenOptions).json({
        success:true,
        message,
        newUser,
    })
}

export default sendToken;