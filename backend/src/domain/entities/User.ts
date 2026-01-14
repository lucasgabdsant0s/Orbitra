import { CreateUserProps } from "../dtos/CreateUserProps";

export class User {
  public id?: string;
  public name!: string;
  public email!: string;
  public passwordHash!: string;
  public role!: 'ADMIN' | 'USER' | 'MANAGER';
  public companyId!: string;
  public created_at?: Date;
  public updated_at?: Date;

  constructor(props: CreateUserProps) {
    if (!props.email) throw new Error("Email is required");
    if (!props.passwordHash) throw new Error("Password is required");
    if (!props.companyId) throw new Error("Company ID is required");
    if (!props.role) throw new Error("Role is required");

    Object.assign(this, props);
  }

  public isAdmin(): boolean {
    return this.role === 'ADMIN';
  }
}
