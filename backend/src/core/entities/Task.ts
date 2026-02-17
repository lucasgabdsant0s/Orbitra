import { TaskPriority, TaskStatus } from '../enums/index.js';
export interface TaskProps {
  id?: string;
  tenantId: string;
  projectId: string;
  title: string;
  description?: string | null;
  status?: TaskStatus;
  priority?: TaskPriority;
  assigneeId?: string | null;
  dueDate?: Date | null;
  createdBy: string;
  deletedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}
export class Task {
  public readonly id?: string;
  public tenantId: string;
  public projectId: string;
  public title: string;
  public description: string | null;
  public status: TaskStatus;
  public priority: TaskPriority;
  public assigneeId: string | null;
  public assignee?: { id: string; name: string; email: string; avatarUrl?: string | null } | null;
  public dueDate: Date | null;
  public createdBy: string;
  public deletedAt: Date | null;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(
    props: TaskProps & {
      assignee?: { id: string; name: string; email: string; avatarUrl?: string | null } | null;
    },
  ) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.projectId = props.projectId;
    this.title = props.title;
    this.description = props.description ?? null;
    this.status = props.status ?? TaskStatus.TODO;
    this.priority = props.priority ?? TaskPriority.MEDIUM;
    this.assigneeId = props.assigneeId ?? null;
    this.assignee = props.assignee ?? null;
    this.dueDate = props.dueDate ?? null;
    this.createdBy = props.createdBy;
    this.deletedAt = props.deletedAt ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
