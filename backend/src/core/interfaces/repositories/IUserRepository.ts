import type { User } from '../../entities/User.js';
import type { PaginatedResult, PaginationOptions } from '../../types/index.js';
export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(tenantId: string, id: string): Promise<User | null>;
  findByEmail(tenantId: string, email: string): Promise<User | null>;
  findByEmailGlobal(email: string): Promise<User | null>;
  findAll(tenantId: string, options: PaginationOptions): Promise<PaginatedResult<User>>;
  update(tenantId: string, id: string, data: Partial<User>): Promise<User>;
  softDelete(tenantId: string, id: string): Promise<void>;
}
