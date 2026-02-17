import type { Tenant } from '../../../core/entities/Tenant.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
export interface TenantListOutput {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
}
export class ListTenantsUseCase {
  constructor(private tenantRepository: ITenantRepository) {}
  async execute(): Promise<TenantListOutput[]> {
    const tenants = await this.tenantRepository.findAll();
    return tenants.map((tenant: Tenant) => ({
      id: tenant.id!,
      name: tenant.name,
      slug: tenant.slug,
      createdAt: tenant.createdAt!,
    }));
  }
}
