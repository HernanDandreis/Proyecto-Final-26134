import { Router } from "express";
import {getProproducts,getProductById, createProduct, physicalDeleteProduct } from '../controllers/products.controller.js';

const router = Router();

    router.get("/", getProproducts);
    router.get("/:id", getProductById);
    router.post("/", createProduct);
    router.delete("/:id", physicalDeleteProduct);

export default router;