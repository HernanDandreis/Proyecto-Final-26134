import { Router } from "express";
import {getProproducts,getProductById, createProduct, updateProduct, logicalDeleteProduct, physicalDeleteProduct } from '../controllers/products.controller.js';
import { authentication } from '../middleware/auth.middleware.js'

const router = Router();

    router.get("/", getProproducts);
    router.get("/:id", getProductById);
    router.post("/", authentication, createProduct);
    router.put("/:id", authentication, updateProduct);
    router.put('/:id/status', authentication, logicalDeleteProduct);
    router.delete("/:id", authentication, physicalDeleteProduct);

export default router