export interface TenantProps {
  id?: string;
  name: string;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Tenant {
  public readonly id?: string;
  public name: string;
  public slug: string;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;

  constructor(props: TenantProps) {
    this.id = props.id;
    this.name = props.name;
    this.slug = props.slug;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
