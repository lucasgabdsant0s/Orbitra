export interface CommentProps {
  id?: string;
  tenantId: string;
  projectId: string;
  userId: string;
  parentId?: string | null;
  text: string;
  deletedAt?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Comment {
  public readonly id?: string;
  public tenantId: string;
  public projectId: string;
  public userId: string;
  public parentId: string | null;
  public text: string;
  public deletedAt: Date | null;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(props: CommentProps) {
    this.id = props.id;
    this.tenantId = props.tenantId;
    this.projectId = props.projectId;
    this.userId = props.userId;
    this.parentId = props.parentId ?? null;
    this.text = props.text;
    this.deletedAt = props.deletedAt ?? null;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
