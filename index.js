const express = require("express");
const cors = require("cors")

const app = express();

app.use(cors())

const data = require("./api.json")


app.get("/",(req,res)=>{
    res.send(data)
})

app.listen(5000, () => {
  console.log(`Server is Listening at http://localhost:5000`);
});
