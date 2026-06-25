import { db } from '../config/firebase.js';
import { collection, doc, writeBatch,} from 'firebase/firestore';
import { productsFactory } from '../factories/products.factory.js';
import fs from 'fs';

const productsCollection = collection(db, 'products');

async function seedProducts(quantity) {
    try {
        const batch = writeBatch(db);

        for (let i = 0; i < quantity; i++) {
            const ref = doc(productsCollection);

            batch.set(
                ref,
                productsFactory()
            );
        }

        await batch.commit();

        console.log(`✅ ${quantity} products created`);
        fs.writeFileSync ('./src/logs/productSeeder.log',`✅ ${quantity} products created at ${new Date()}\n`, { flag: 'a' })
        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating products:', error);
        fs.writeFileSync ('./src/logs/productSeeder.log',`❌ Error creating products:, error\n`, { flag: 'a' })
        process.exit(1);
    }
}

const quantity = Number(process.argv[2]) || 5; // Si no paso el dato en el script el minimo que creara seran 5
seedProducts(quantity); // npm run seed:products -- 'numero de productos'

