const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
// ePHWdLFUMmKifyga   mongodb+srv://prattyancha009:<password>@clusternext.e7szttg.mongodb.net/
app.listen(4000,() => {
    console.log("server Started on PORT 4000");
});

mongoose.connect("mongodb://localhost:27017/jwt",{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log("DB Connection Successfull")
})

app.use(cors({
    origin:["http:/localhost:3000"],
    method :["GET", "POST"],
    credentials : true
}))

app.use(express.json());