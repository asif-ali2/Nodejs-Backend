const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

require('./DB/connectDB');
const port = 3000;
app.use(express.json());
app.use(cors());

dotenv.config({ path: '/TODO/DB/config.env' })
const item = require("./Routes/addItem")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', item)

app.listen(port, () => {
    console.log(`Connecting to ${port}`);
})