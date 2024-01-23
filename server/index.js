const express=require('express');
const app=express();
const dbConnect=require('./Config/database');
const PORT=process.env.PORT || 5000;
const router=require('./Routes/routes');
const cors=require('cors');
require('dotenv').config();

// Connect to database
dbConnect();

//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api',router);

//Starting the server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})