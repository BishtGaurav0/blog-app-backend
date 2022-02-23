const express = require("express")
const data = require("./route")
const cors = require("cors")
const port = process.env.PORT || 4001;
const app = express();


app.use(cors());
app.use("/api/v1",data)

app.listen(port,()=>{
    console.log(`Application started ${port}`);
})