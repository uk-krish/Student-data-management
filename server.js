const express = require('express');
const env = require('dotenv');
const dbConnect = require('./config/dbconnect');
env.config();
const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use('/api/student', require('./routes/StudentRouter'))

app.listen(port, () => {
    console.log(`The Server start in the ${port}`);
})

console.log(port);
