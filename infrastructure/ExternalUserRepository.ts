import axios from 'axios';
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/User';

export class ExternalUserRepository implements UserRepository {
    async getAll(): Promise<User[]> {
        const res = await axios.get('http://localhost:3002/users');
        return res.data;
    }

    async getById(id: number): Promise<User | null> {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        return res.data;
    }
}
