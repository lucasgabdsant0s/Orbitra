import { NotificationType } from '../enums/index.js';

export interface NotificationProps {
  id?: string;
  tenantId: string;
  userId: string;
  type: NotificationType;
  message: string;
  link?: string | null;
  isRead?: boolean;
  createdAt?: Date;
}

export class Notification {
  public readonly id?: string;
  public tenantId: string;
  public userId: string;
  public type: NotificationType;
  public message: string;
  public link: string | null;
  public isRead: boolean;
  public readonly createdAt?: Date;

  constructor(props: NotificationProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.userId = props.userId;
    this.type = props.type;
    this.message = props.message;
    this.link = props.link ?? null;
    this.isRead = props.isRead ?? false;
    this.createdAt = props.createdAt;
  }
}
