import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.js";


const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json()); //allows to use json data in req.body

app.get("/", (req, res)=>{
    res.send("Hii, I am Root");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () =>{
    connectDB();
    console.log("App is listing at "+PORT);
});