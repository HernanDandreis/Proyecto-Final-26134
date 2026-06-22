import { Router } from "express";
import {getProproducts,getProductById, createProduct, updateProduct, logicalDeleteProduct, physicalDeleteProduct } from '../controllers/products.controller.js';

const router = Router();

    router.get("/", getProproducts);
    router.get("/:id", getProductById);
    router.post("/", createProduct);
    router.put("/:id", updateProduct);
    router.put('/:id/status', logicalDeleteProduct);
    router.delete("/:id", physicalDeleteProduct);

export default router;