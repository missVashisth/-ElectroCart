import express from "express";
import { getProducts, createProduct, updateProduct, deleteproduct } from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteproduct);


export default router;