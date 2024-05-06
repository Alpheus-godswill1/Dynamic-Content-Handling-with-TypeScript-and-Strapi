// Datacollection/datafetch.ts

import { ProductService } from '../functions/fetchprod'; // Adjust the import path as needed

async function testFetchProduct() {
    try {
        const productId = 5; // Replace with the ID of the product you want to fetch
        const product = await ProductService.fetchProductData(productId);
        console.log('Product:', product);
    } catch (error) {
        console.error('Error:', error);
    }
}

testFetchProduct();
