const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        const connect = mongoose.connect("mongodb://localhost:27017/Contact_App");
        console.log("DB Connected :"+ (await connect).connection.host);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}




module.exports = connectDb;