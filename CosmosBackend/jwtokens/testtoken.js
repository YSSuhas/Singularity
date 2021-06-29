const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const testjwt = () => jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzIxYWRiNzlkMzNmNDExYzFjYWQ3ZiIsImlhdCI6MTYyMzkxNzQ3MywiZXhwIjoxNjI1MjEzNDczfQ.1O_GwJCbplN7zo6EmmHWcUQrKS2VvXZPpAzosM3IKxg", process.env.JWT_Private_Key , function(err, decoded) {
    console.log(decoded);
});

module.exports = testjwt;