const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const gettoken = (id) => {
    return jwt.sign( { id } , process.env.JWT_Private_Key );
}

module.exports = gettoken