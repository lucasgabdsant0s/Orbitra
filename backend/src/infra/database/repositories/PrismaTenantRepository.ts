import { prisma } from '../../database/prisma.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import { Tenant } from '../../../core/entities/Tenant.js';

export class PrismaTenantRepository implements ITenantRepository {
  async create(tenant: Tenant): Promise<Tenant> {
    const created = await prisma.tenant.create({
      data: {
        name: tenant.name,
        slug: tenant.slug,
      },
    });

    return new Tenant({
      id: created.id,
      name: created.name,
      slug: created.slug,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    });
  }

  async findById(id: string): Promise<Tenant | null> {
    const tenant = await prisma.tenant.findUnique({ where: { id } });
    if (!tenant) return null;

    return new Tenant(tenant as any);
  }

  async delete(id: string): Promise<void> {
    await prisma.tenant.delete({ where: { id } });
  }

  async findBySlug(slug: string): Promise<Tenant | null> {
    const record = await prisma.tenant.findUnique({ where: { slug } });
    if (!record) return null;

    return new Tenant({
      id: record.id,
      name: record.name,
      slug: record.slug,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
