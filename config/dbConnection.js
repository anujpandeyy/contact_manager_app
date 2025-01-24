const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async()=>{
    try{
        const connect = mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connected :"+ (await connect).connection.host);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}




module.exports = connectDb;