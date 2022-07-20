
const mongoose = require('mongoose');

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDB = async ()=>{
    try {
        //mongoDB connection string
        const con = await mongoose.connect(process.env.MONGO_URI,connectionParams)
        console.log(`MongoDB Connected ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}


module.exports = connectDB;


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