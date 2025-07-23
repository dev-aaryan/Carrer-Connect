import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token)
        return res.json({message: "User not authenticated", success: false,})
        
        const decode = await jwt.verify(token, process.env.SECRET_KEY);

        if(!decode)
        return res.json({message:"Invalid token", success:false})
        
        req.id = decode.userId;
        next(); // to pass the control to the next middleware or route handler
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated;