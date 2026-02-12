import { prisma } from '../../database/prisma.js';
import type { IProjectMemberRepository } from '../../../core/interfaces/repositories/IProjectMemberRepository.js';
import { ProjectMember } from '../../../core/entities/ProjectMember.js';
import { Role } from '../../../core/enums/index.js';

export class PrismaProjectMemberRepository implements IProjectMemberRepository {
  async addMember(member: ProjectMember): Promise<ProjectMember> {
    const created = await prisma.projectMember.create({
      data: {
        tenantId: member.tenantId,
        userId: member.userId,
        projectId: member.projectId,
        role: member.role,
      },
    });

    return this.toDomain(created);
  }

  async removeMember(tenantId: string, projectId: string, userId: string): Promise<void> {
    await prisma.projectMember.delete({
      where: {
        projectId_userId: { projectId, userId },
        tenantId,
      },
    });
  }

  async findMember(tenantId: string, projectId: string, userId: string): Promise<ProjectMember | null> {
    const record = await prisma.projectMember.findFirst({
      where: {
        projectId,
        userId,
        tenantId,
      },
    });
    return record ? this.toDomain(record) : null;
  }

  async listMembers(tenantId: string, projectId: string): Promise<ProjectMember[]> {
    const records = await prisma.projectMember.findMany({
      where: { projectId, tenantId },
      include: { user: { select: { name: true, email: true, avatarUrl: true } } }
    });
    return records.map((r) => this.toDomain(r));
  }

  async updateRole(tenantId: string, projectId: string, userId: string, role: Role): Promise<void> {
    await prisma.projectMember.update({
      where: {
        projectId_userId: { projectId, userId },
        tenantId,
      },
      data: { role },
    });
  }

  private toDomain(record: any): ProjectMember {
    return new ProjectMember({
      id: record.id,
      tenantId: record.tenantId,
      userId: record.userId,
      projectId: record.projectId,
      role: record.role as Role,
      createdAt: record.createdAt,
    });
  }
}
