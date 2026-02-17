import { ForbiddenError, NotFoundError } from '../../../core/exceptions/index.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
export class DeleteTenantUseCase {
  constructor(private tenantRepository: ITenantRepository) {}
  async execute(tenantId: string, requesterRole: string): Promise<void> {
    if (requesterRole !== 'OWNER') {
      throw new ForbiddenError('Only the owner can delete the organization.');
    }
    const existing = await this.tenantRepository.findById(tenantId);
    if (!existing) {
      throw new NotFoundError('Organization not found.');
    }
    await this.tenantRepository.delete(tenantId);
  }
}
