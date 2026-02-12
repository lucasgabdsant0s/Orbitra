import type { Role } from '../enums/index.js';

export interface UserProps {
  id?: string;
  tenantId: string;
  email: string;
  passwordHash: string;
  name: string;
  role: Role;
  isActive?: boolean;
  avatarUrl?: string | null;
  deletedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class User {
  public readonly id?: string;
  public tenantId: string;
  public email: string;
  public passwordHash: string;
  public name: string;
  public role: Role;
  public isActive: boolean;
  public avatarUrl: string | null;
  public deletedAt: Date | null;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(props: UserProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.email = props.email;
    this.passwordHash = props.passwordHash;
    this.name = props.name;
    this.role = props.role;
    this.isActive = props.isActive ?? true;
    this.avatarUrl = props.avatarUrl ?? null;
    this.deletedAt = props.deletedAt ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  isOwner(): boolean {
    return this.role === 'OWNER';
  }

  isAdmin(): boolean {
    return this.role === 'ADMIN' || this.role === 'OWNER';
  }
}
