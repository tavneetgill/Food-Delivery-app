const express = require("express");
const morgan = require("morgan");
const dotenv = require('dotenv')
const connectDB = require('./config/config')
const userRoutes = require('./routes/users');
const authRoutes = require("./routes/auth");

//config dotenv
dotenv.config()

 
//connection mongoDb
connectDB()

//Creation of Rest object (to use the functionality of express)
const app = express();

//middlewares
//for adding the routing functions.
app.use(express.json());
app.use(morgan('dev'));

//routes
//app.use("/api/users",userRoutes);
//app.use("/api/auth",authRoutes);

//route
app.get('/',(req,res)=>{
    res.send("<h1>Hello From Node</h1>");
});

const port = process.env.PORT ||8000

app.listen(port,()=>{
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`);
});