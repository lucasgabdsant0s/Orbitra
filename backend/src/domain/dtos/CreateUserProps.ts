export interface CreateUserProps {
  name: string;
  email: string;
  passwordHash: string;
  role: 'ADMIN' | 'USER' | 'MANAGER';
  companyId: string;
}
