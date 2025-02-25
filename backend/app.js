import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.js";

dotenv.config(); 

const app = express();

app.use(express.json()); //allows to use json data in req.body

app.get("/", (req, res)=>{
    res.send("Hii, I am Root");
});

app.use("/api/products", productRoutes)



app.listen(5500, () =>{
    connectDB();
    console.log("App is listing at 5500");
});