const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports.protect = asyncHandler( async(req,res,next) => {

    let token;

    if(req.headers.authorization) {

        try {

            token = req.headers.authorization;
            var decode = jwt.verify( token , process.env.JWT_Private_Key );
            req.user = decode.id;
            console.log(req.user);
            next();

        } catch (error) {
            
            throw new Error("User not Authenticated");

        }

    }

} )