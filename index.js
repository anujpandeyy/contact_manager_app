const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoute"));

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})