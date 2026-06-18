const products = [
    { id: 1, name: "Product 1", price: 10, active: true },
    { id: 2, name: "Product 2", price: 20, active: true },
    { id: 3, name: "Product 3", price: 30, active: true },
];

import { getAllProductsModel } from "../models/Product.model.js";

export const getProproducts = async (req, res) => {
    const products = await getAllProductsModel();
    res.json(products);
};

export const getProductById = (req, res) => {

    const { id } = req.params;
    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }

    return res.json(product);
};

export const createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name && !price) {
        return res.status(422).json({
            messages: "Name and Price are required"
        })
    }

    if (!name) {
        return res.status(422).json({
            message: "Name are required",
        });
    };

    if (typeof name !== "string") {
        return res.status(422).json({
            message: "Name must be a string",
        });
    };

    if (!price) {
        return res.status(422).json({
            message: "Prices is required"
        })
    };

    if (typeof price !== "number") {
        return res.status(422).json({
            message: "Price must be a number"
        })
    };

    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };

    products.push(newProduct);

    return res.status(201).json({
        message: "Product created",
        product: newProduct,
    });
};

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({
            message: "Category not found",
        });
    }
    
    if (!name && !price) {
        return res.status(422).json({
            messages: "Name and Price are required"
        })
    }

    if (!name) {
        return res.status(422).json({
            message: "Name are required",
        });
    };

    if (typeof name !== "string") {
        return res.status(422).json({
            message: "Name must be a string",
        });
    };

    if (!price) {
        return res.status(422).json({
            message: "Prices is required"
        })
    };

    if (typeof price !== "number") {
        return res.status(422).json({
            message: "Price must be a number"
        })
    };

    product.name = name;
    product.price = price;

    return res.status(202).json({
        message:`Product update id: ${ id } with new name: ${name}, and new price: ${price}`,
    })
};

export const physicalDeleteProduct = (req, res) => {
    const { id } = req.params; 

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({
            message: "Prouct not found"
        })
    }

        const deletedProduct = products.splice(products.indexOf(product), 1);
        
    return res.status(202).json({
            message: "Product deleted",
            product: deletedProduct[0],
        })
};

export const logicalDeleteProduct =  ( req, res) => {
    const { id } = req.params;

    const product = products.find((product) => product.id === Number(id));

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        })
    }

    const productStatus = product.active === true ? product.active = false : product.active = true;

    return res.status(202).json({
        message: "Product updated",
        product: productStatus,
    });
};