import axios from 'axios';
import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';

export class ExternalProductRepository implements ProductRepository {
    async getAll(): Promise<Product[]> {
        const res = await axios.get('http://localhost:3001/products');
        return res.data;
    }

    async getById(id: number): Promise<Product | null> {
        const res = await axios.get(`http://localhost:3001/products/${id}`);
        return res.data;
    }
}
