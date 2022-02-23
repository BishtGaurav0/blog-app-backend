const express = require("express")
const data = require("./route")
const cors = require("cors")

const app = express();


app.use(cors());
app.use("/api/v1",data)

app.listen(4001,()=>{
    console.log("Application started");
})