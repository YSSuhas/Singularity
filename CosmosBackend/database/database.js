const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectdb = async() => {
    try {
        const condb = await mongoose.connect(process.env.MONGODB_URL, 
            {useNewUrlParser: true , useUnifiedTopology: true}
        );
        console.log("Connected to database");
    }
    catch(err) {
        console.log(`${err.message}`);
        process.exit(1);
    }
}

module.exports = connectdb;