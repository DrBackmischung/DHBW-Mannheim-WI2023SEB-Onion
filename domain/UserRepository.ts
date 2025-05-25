import { User } from './User';

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User | null>;
}
