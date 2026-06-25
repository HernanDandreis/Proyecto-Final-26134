import { faker } from '@faker-js/faker';

export function productsFactory(overrides = {}) {
    return {
        title: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        active: faker.datatype.boolean(),
        stock: faker.number.int({
            min: 0,
            max: 100,
        }),
        ...overrides,
    };
}