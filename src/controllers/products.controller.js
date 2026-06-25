import { getAllProductsModel, getProductByIdModel, postProductModel, putProductModel, physicalDeleteProductModel, logicalDeleteProductModel } from "../models/Product.model.js";

export const getProproducts = async (req, res) => {
    const products = await getAllProductsModel();
    res.json(products);
};

export const getProductById = async (req, res) => {

    const { id } = req.params;
    const product = await getProductByIdModel(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
        });
    }

    return res.json(product);
};

export const createProduct = async (req, res) => {
    const { title, price,  description, stock, active} = req.body;

    if (!title) {
        return res.status(422).json({
            message: "title are required",
        });
    };

    if (typeof title !== "string") {
        return res.status(422).json({
            message: "title must be a string",
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

    if(price <= 0) {
            return res.status(422).json({
            message: "Prices must be greater than 0"
        })
    }

    if (!description) {
        return res.status(422).json({
            message: "description are required",
        });
    };

    if (typeof description !== "string") {
        return res.status(422).json({
            message: "description must be a string",
        });
    };

    if (!stock) {
        return res.status(422).json({
            message: "stock are required",
        });
    };

    if (typeof stock !== "number") {
        return res.status(422).json({
            message: "stock must be a number",
        });
    };

    if(stock <= 0) {
            return res.status(422).json({
            message: "Stock must be greater than 0"
        })
    }

    if (!active) {
        return res.status(422).json({
            message: "active status are required",
        });
    };

    if (typeof active !== "boolean") {
        return res.status(422).json({
            message: "title must be a string",
        });
    };

    const newProduct = await postProductModel({
        title,
        price,
        description,
        stock,
        active
    })

    return res.status(201).json({
        message: "Product created",
        product: newProduct,
    });
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, price,  description, stock, active} = req.body;

    if (!title) {
        return res.status(422).json({
            message: "title are required",
        });
    };

    if (typeof title !== "string") {
        return res.status(422).json({
            message: "title must be a string",
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

    if(price <= 0) {
            return res.status(422).json({
            message: "Prices must be greater than 0"
        })
    }

    if (!description) {
        return res.status(422).json({
            message: "description are required",
        });
    };

    if (typeof description !== "string") {
        return res.status(422).json({
            message: "description must be a string",
        });
    };

    if (!stock) {
        return res.status(422).json({
            message: "stock are required",
        });
    };

    if (typeof stock !== "number") {
        return res.status(422).json({
            message: "stock must be a number",
        });
    };

    if(stock <= 0) {
            return res.status(422).json({
            message: "Stock must be greater than 0"
        })
    }

    if (!active) {
        return res.status(422).json({
            message: "active status are required",
        });
    };

    if (typeof active !== "boolean") {
        return res.status(422).json({
            message: "title must be a string",
        });
    };

    const updateProduct = await putProductModel(id, {
        title,
        price,
        description,
        stock,
        active
    })

    if(!updateProduct) {
        return res.status(404).json({ message:"Product not found" })
    }

    return res.status(202).json({
        message:`Product update id: ${ id }`,
    })
};

export const physicalDeleteProduct = async (req, res) => {
    const { id } = req.params; 

    const deletedProduct = await physicalDeleteProductModel(id)

    if (!deletedProduct) {
        return res.status(404).json({
            message: "Prouct not found"
        })
    }
        
    return res.status(202).json({
            message: "Product deleted",
            product: deletedProduct,
        })
};

export const logicalDeleteProduct = async (req, res) => {
    const { id } = req.params;

    const product = await getProductByIdModel(id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const newStatus = !product.active;

    await logicalDeleteProductModel(id, {
        active: newStatus
    });

    return res.status(200).json({
        message: "Status updated",
        actual_status: newStatus
    });
};