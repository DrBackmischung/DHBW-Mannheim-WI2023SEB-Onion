import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export class UserService {
    constructor(private repo: UserRepository) {}

    async getAll(): Promise<User[]> {
        return await this.repo.getAll();
    }

    async getById(id: number): Promise<User | null> {
        return await this.repo.getById(id);
    }
}
