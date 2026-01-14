import { prisma } from '../../database/prisma';
import { IUserRepository } from '../../../domain/interfaces/repositories/IUserRepository';
import { User } from '../../../domain/entities/User';

export class PrismaUserRepository implements IUserRepository {

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    return new User({
      name: user.name,
      email: user.email,
      passwordHash: user.passwordHash,
      role: user.role,
      companyId: user.companyId,
    });
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return null;
    }

    return new User({
      name: user.name,
      email: user.email,
      passwordHash: user.passwordHash,
      role: user.role,
      companyId: user.companyId,
    });
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        passwordHash: user.passwordHash,
        role: user.role,
        companyId: user.companyId,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
