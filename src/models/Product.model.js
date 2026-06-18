import { db } from '../config/firebase.js';
import { collection, getDocs} from 'firebase/firestore';

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