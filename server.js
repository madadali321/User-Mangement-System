
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require("cors")

const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//Console log shows the request...
app.use(morgan('tiny'));

//MongoDB Connection
connectDB();

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

//Load Assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//Load Routers
app.use(cors({
    origin: '*'
}));

app.use('/',require('./server/routes/router'));

app.listen(PORT, ()=>{
    console.log(`Server is Running http://localhost:${PORT}`);
})