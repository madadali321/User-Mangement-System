// const mongoose = require('mongoose');

// const dbUrl = 'mongodb+srv://CodeHubSolution:dXy3CUnGneQr7HCg@cluster0.xa5usf0.mongodb.net/myFirstDataBase?retryWrites=true&w=majority'

// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

// mongoose.connect(dbUrl, connectionParams).then(() => {
//     console.log('Connected to DB');
// }).catch((e) => {
//     console.log('Error', e);
// })


const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//Console log shows the request...
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

//Load Assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>{
    res.render('index.ejs')
});

app.get('/add-user',(req,res)=>{
    res.render('add_user.ejs')
});

app.get('/update-user',(req,res)=>{
    res.render('update_user.ejs')
});

app.get('/add-order',(req,res)=>{
    res.render('add_order.ejs')
});

app.get('/login',(req,res)=>{
    res.render('login.ejs')
});

app.listen(PORT, ()=>{
    console.log(`Server is Running http://localhost:${PORT}`);
})