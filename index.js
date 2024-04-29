import express from "express";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
import connectToDb from './dbConnection/dbConnection.js'
const app = express(); 


app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)


connectToDb();



const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));


