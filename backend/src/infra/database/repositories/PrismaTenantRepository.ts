import { Tenant } from '../../../core/entities/Tenant.js';
import type { ITenantRepository } from '../../../core/interfaces/repositories/ITenantRepository.js';
import { prisma } from '../../database/prisma.js';
export class PrismaTenantRepository implements ITenantRepository {
  async create(tenant: Tenant): Promise<Tenant> {
    const created = await prisma.tenant.create({
      data: { name: tenant.name, slug: tenant.slug },
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
  async update(id: string, data: Partial<Tenant>): Promise<Tenant> {
    const updated = await prisma.tenant.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.slug !== undefined && { slug: data.slug }),
      },
    });
    return new Tenant({
      id: updated.id,
      name: updated.name,
      slug: updated.slug,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    });
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
  async findAll(): Promise<Tenant[]> {
    const records = await prisma.tenant.findMany();
    return records.map(
      (record: any) =>
        new Tenant({
          id: record.id,
          name: record.name,
          slug: record.slug,
          createdAt: record.createdAt,
          updatedAt: record.updatedAt,
        }),
    );
  }
}
