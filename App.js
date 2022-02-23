const express = require("express")
const data = require("./route")
const cors = require("cors")
const port = 40001;
const app = express();


app.use(cors());
app.use("/api/v1",data)

app.listen(process.env.port,()=>{
    console.log(`  Application started${port}`);
})