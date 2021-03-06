const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
var cors = require('cors');

const connectdb = require('./database/database');

const userRoute = require('./routes/userroute');
const questionRoute = require('./routes/questionroute');
const answerRoute = require('./routes/answerroute');
const starRoute = require('./routes/starroute');
const uploadRoute = require('./routes/uploadroute');
const chatRoute = require('./routes/chatroute');
const searchRoute = require('./routes/searchroute');

dotenv.config();

connectdb();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req,res) => {
    res.send("API is running...");
})

app.use(`/api/users`, userRoute);

app.use(`/api/questions`, questionRoute);

app.use(`/api/answers`, answerRoute);

app.use(`/api/stars`, starRoute);

app.use(`/api/upload`, uploadRoute);

app.use(`/api/chats`, chatRoute);

app.use(`/api/search`, searchRoute);

const port = process.env.PORT || 9000;
const host = process.env.HOST;

app.listen(port , console.log(`Server running in ${host} on port ${port}`));