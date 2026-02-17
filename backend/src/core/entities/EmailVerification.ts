export interface EmailVerificationProps {
  id?: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt?: Date;
}
export class EmailVerification {
  public readonly id?: string;
  public userId: string;
  public token: string;
  public expiresAt: Date;
  public readonly createdAt?: Date;
  constructor(props: EmailVerificationProps) {
    this.id = props.id;
    this.userId = props.userId;
    this.token = props.token;
    this.expiresAt = props.expiresAt;
    this.createdAt = props.createdAt;
  }
}
