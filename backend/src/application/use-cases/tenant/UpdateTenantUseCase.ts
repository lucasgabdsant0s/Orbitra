import type { Tenant } from '../../../core/entities/Tenant.js';
import { NotFoundError } from '../../../core/exceptions/index.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';

export interface UpdateTenantInput {
  name?: string;
}

export class UpdateTenantUseCase {
  constructor(private tenantRepository: ITenantRepository) {}

  async execute(tenantId: string, input: UpdateTenantInput): Promise<Tenant> {
    const tenant = await this.tenantRepository.findById(tenantId);

    if (!tenant) {
      throw new NotFoundError('Organization');
    }

    const updated = await this.tenantRepository.update(tenantId, {
      ...(input.name !== undefined && { name: input.name }),
    });

    return updated;
  }
}
