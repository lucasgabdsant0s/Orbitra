import type { Invite } from '../../entities/Invite.js';
export interface IInviteRepository {
  create(invite: Invite): Promise<Invite>;
  findByToken(tenantId: string, token: string): Promise<Invite | null>;
  findById(tenantId: string, id: string): Promise<Invite | null>;
  updateStatus(tenantId: string, id: string, status: string): Promise<void>;
}
