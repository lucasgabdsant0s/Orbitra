import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuthStore } from '@/stores/authStore';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { useCreateInvite } from '../hooks';

export function InviteMemberDialog() {
  const { t } = useTranslation();
  const tenantIdFromUser = useAuthStore((state) => state.user?.tenantId);
  const token = useAuthStore((state) => state.token);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'ADMIN' | 'MEMBER' | 'GUEST'>('MEMBER');
  const [inviteLink, setInviteLink] = useState('');
  const { mutateAsync: createInvite, isPending } = useCreateInvite();

  const tenantIdFromToken = (() => {
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1] || '')) as { tenantId?: string };
      return payload.tenantId ?? null;
    } catch {
      return null;
    }
  })();

  const tenantId = tenantIdFromUser || tenantIdFromToken;

  const handleInvite = async () => {
    if (!tenantId) {
      toast.error(t('toasts.invite_missing_tenant'));
      return;
    }

    const invite = await createInvite({ tenantId, email, role });
    setInviteLink(invite.inviteLink || '');
  };

  const handleCopyInviteLink = async () => {
    if (!inviteLink) return;
    try {
      await navigator.clipboard.writeText(inviteLink);
      toast.success(t('toasts.invite_link_copied'));
    } catch {
      toast.error(t('toasts.invite_link_copy_error'));
    }
  };

  const resetState = () => {
    setEmail('');
    setRole('MEMBER');
    setInviteLink('');
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) resetState();
      }}
    >
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
          {t('team.invite_member')}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('team.invite_dialog.title')}</DialogTitle>
          <DialogDescription>{t('team.invite_dialog.description')}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="invite-email">{t('team.invite_dialog.email_label')}</Label>
            <Input
              id="invite-email"
              type="email"
              placeholder="membro@empresa.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>{t('team.invite_dialog.role_label')}</Label>
            <Select value={role} onValueChange={(value: 'ADMIN' | 'MEMBER' | 'GUEST') => setRole(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">{t('team.roles.admin')}</SelectItem>
                <SelectItem value="MEMBER">{t('team.roles.member')}</SelectItem>
                <SelectItem value="GUEST">{t('team.roles.guest')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {inviteLink && (
            <div className="space-y-2">
              <Label>{t('team.invite_dialog.generated_link')}</Label>
              <div className="flex gap-2">
                <Input value={inviteLink} readOnly />
                <Button type="button" variant="outline" size="icon" onClick={handleCopyInviteLink}>
                  <Copy className="size-4" />
                </Button>
                <Button type="button" variant="secondary" onClick={handleCopyInviteLink}>
                  {t('team.invite_dialog.copy_button')}
                </Button>
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            {t('common.cancel')}
          </Button>
          <Button type="button" onClick={handleInvite} disabled={isPending || !email.trim()}>
            {isPending ? t('common.loading') : t('team.invite_dialog.send_button')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
