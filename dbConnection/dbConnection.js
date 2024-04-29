
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGO_URL = process.env.MONGO_DB_URL;



const connectToDb = async ()=> 
{
    mongoose.connect(MONGO_URL , {
              dbName: "MERN_Recipe_Amit",
            })
    .then(()=> console.log("server is connected")
    );
} 


export default connectToDb;
