import axios from "axios";
import { Product } from "../interfaces/Products";

const BASE_URL = "http://localhost:1337"; // Replace with your Strapi base URL

export const ProductService = {
    async fetchProductData(id: number): Promise<Product> {
        try {
            const response = await axios.get<Product>(`${BASE_URL}/api/products/${id}?populate=images`);
            return response.data;
        } catch (error) {
            console.error('Error fetching product data:', error);
            throw error;
        }
    },
    
};

