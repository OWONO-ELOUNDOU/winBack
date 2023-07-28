// Import modules section start
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const { db } = require("./config/firebase");
const app = express();
const PORT = process.env.PORT || 6969;

const userRoute = require('./routes/User');
const commentsRoute = require('./routes/Comments');
// Import modules section end

app.use(bodyParser.json());

// Use routes section start
app.use('/user', userRoute);
app.use('/comments', commentsRoute);
// Use routes section end


// Set up cors policy start
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// Set up cors policy end

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})