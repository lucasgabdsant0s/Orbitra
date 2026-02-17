import { InviteStatus, Role } from '../enums/index.js';
export interface InviteProps {
  id?: string;
  tenantId: string;
  email: string;
  role?: Role;
  token: string;
  status?: InviteStatus;
  expiresAt: Date;
  createdAt?: Date;
}
export class Invite {
  public readonly id?: string;
  public tenantId: string;
  public email: string;
  public role: Role;
  public token: string;
  public status: InviteStatus;
  public expiresAt: Date;
  public readonly createdAt?: Date;
  constructor(props: InviteProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.email = props.email;
    this.role = props.role ?? Role.MEMBER;
    this.token = props.token;
    this.status = props.status ?? InviteStatus.PENDING;
    this.expiresAt = props.expiresAt;
    this.createdAt = props.createdAt;
  }
}
