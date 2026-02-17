import type { AuditAction, AuditEntityType } from '../enums/index.js';

export interface AuditLogProps {
  id?: string;
  tenantId: string;
  projectId?: string | null;
  userId: string;
  userName?: string;
  userAvatar?: string | null;
  entityType: AuditEntityType;
  entityId: string;
  action: AuditAction;
  changes: any;
  timestamp?: Date;
}

export class AuditLog {
  public readonly id?: string;
  public tenantId: string;
  public projectId: string | null;
  public userId: string;
  public userName?: string;
  public userAvatar?: string | null;
  public entityType: AuditEntityType;
  public entityId: string;
  public action: AuditAction;
  public changes: any;
  public readonly timestamp?: Date;

  constructor(props: AuditLogProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.projectId = props.projectId ?? null;
    this.userId = props.userId;
    this.userName = props.userName;
    this.userAvatar = props.userAvatar;
    this.entityType = props.entityType;
    this.entityId = props.entityId;
    this.action = props.action;
    this.changes = props.changes;
    this.timestamp = props.timestamp;
  }
}
