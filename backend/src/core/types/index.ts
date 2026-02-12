export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface TokenPayload {
  sub: string;
  tenantId: string;
  role: string;
}

export interface AuthContext {
  userId: string;
  tenantId: string;
  role: string;
}
