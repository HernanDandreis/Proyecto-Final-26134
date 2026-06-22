import { db } from '../config/firebase.js';
import { collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';

const productsCollection = collection(db, 'products');

export const getAllProductsModel = async () => {
    const allProductsSnapshot = await getDocs(productsCollection)

    const products = []

    allProductsSnapshot.forEach((doc) => {
        products.push({
            id: doc.id,
            title: doc.title,
            price: doc.price,
            description: doc.description,
            stock: doc.stock,
            active: doc.active,
            ...doc.data()
        });
    });

    return products;
};

export const getProductByIdModel = async (id) => {
    const productRef = doc(productsCollection, id)
    const productByIdSnapshot = await getDoc(productRef)

    if (!productByIdSnapshot.exists()) {
        return null;
    }

    return {
        id: productByIdSnapshot.id,
        title: productByIdSnapshot.title,
        price: productByIdSnapshot.price,
        description: productByIdSnapshot.description,
        stock: productByIdSnapshot.stock,
        active: productByIdSnapshot.active,
        ...productByIdSnapshot.data()
    }
}

export const postProductModel = async (product) => {
    const productRef = await addDoc(productsCollection, product)

    return {
        id: productRef.id,
        title: productRef.title,
        price: productRef.price,
        description: productRef.description,
        stock: productRef.stock,
        active: productRef.active,
        ...product
    }
}

export const putProductModel = async (id, product) => {
    const productRef = doc(productsCollection, id)
    const productByIdSnapshot = await getDoc(productRef)

    if (!productByIdSnapshot.exists()) {
        return null;
    }

    await updateDoc(productRef, product)

    return {
        id: productRef.id,
        title: productRef.title,
        price: productRef.price,
        description: productRef.description,
        stock: productRef.stock,
        active: productRef.active,
        ...product
    }
}

export const logicalDeleteProductModel = async (id, product) => {
    const productRef = doc(productsCollection, id)
    const productByIdSnapshot = await getDoc(productRef)

    if (!productByIdSnapshot.exists()) {
        return null;
    }

    await updateDoc(productRef, product)

    return {
        status: productRef.active
    }
}

export const physicalDeleteProductModel = async (id) => {
    const productRef = doc(productsCollection, id);
    const deleteProductSnapshot = await getDoc(productRef);

    if (!deleteProductSnapshot.exists()) {
        return null;
    };

    const deletedProduct = {
        id: deleteProductSnapshot.id,
        ...deleteProductSnapshot.data()
    };

    await deleteDoc(productRef);

    return deletedProduct;
}