const express = require("express");
const errHandler = require("./middleware/errorHandler");    
const connectDb = require("./config/dbConnection");
const app = express();
const port = 3000;

app.use(express.json());
connectDb();
app.use("/api/contacts",require("./routes/contactRoute"));
app.use("/api/users",require("./routes/userRoute"));
app.use(errHandler);

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})