import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';

export class ProductService {
    constructor(private repo: ProductRepository) {}

    async getAll(): Promise<Product[]> {
        return await this.repo.getAll();
    }

    async getById(id: number): Promise<Product | null> {
        return await this.repo.getById(id);
    }
}
