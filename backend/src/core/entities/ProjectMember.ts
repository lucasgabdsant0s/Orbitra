import { Role } from '../enums/index.js';

export interface ProjectMemberProps {
  id?: string;
  tenantId: string;
  userId: string;
  projectId: string;
  role?: Role;
  createdAt?: Date;
}

export class ProjectMember {
  public readonly id?: string;
  public tenantId: string;
  public userId: string;
  public projectId: string;
  public role: Role;
  public readonly createdAt?: Date;

  constructor(props: ProjectMemberProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.userId = props.userId;
    this.projectId = props.projectId;
    this.role = props.role ?? Role.MEMBER;
    this.createdAt = props.createdAt;
  }
}
