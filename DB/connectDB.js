const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/todoApp")
.then(()=>{
    console.log("Db connect successfully")
}).catch((err)=>{
    console.log("Something error")

})