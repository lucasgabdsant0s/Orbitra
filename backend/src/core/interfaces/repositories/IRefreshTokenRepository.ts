export interface RefreshTokenData {
  id?: string;
  token: string;
  expiresAt: Date;
  userId: string;
  createdAt?: Date;
}

export interface IRefreshTokenRepository {
  create(data: RefreshTokenData): Promise<RefreshTokenData>;
  findByToken(token: string): Promise<RefreshTokenData | null>;
  deleteByToken(token: string): Promise<void>;
  deleteAllByUserId(userId: string): Promise<void>;
}
