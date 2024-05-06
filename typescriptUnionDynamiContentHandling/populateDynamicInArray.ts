import axios from "axios";

import { ProductComponent } from "../interfaces/ProductComponents";



const BASE_URL = "http://localhost:1337";

async function fetchProductComponents(): Promise<ProductComponent[]> {
    try {
        const response = await axios.get<any>(`${BASE_URL}/api/products?populate=*`);
        const products = response.data.data;

        const components: ProductComponent[] = products.map((product: any, index: number) => {
            const image = product.attributes.images?.data?.[0]?.attributes.url || null;
        
            return {
                id: index + 1,
                title: product.attributes.Title,
                content: product.attributes.content,
                createdBy: product.attributes.Author,
                image: image
            };
        });
        

        return components;
    } catch (error) {
        console.error('Error fetching product components:', error);
        throw error;
    }
}

// Usage
fetchProductComponents().then((components) => {
    console.log(components);
}).catch((error) => {
    console.error(error);
});
