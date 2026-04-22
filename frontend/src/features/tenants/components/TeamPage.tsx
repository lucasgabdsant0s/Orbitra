import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthStore } from '@/stores/authStore';
import { useDeleteUser, useToggleUserActive, useUsers } from '@/features/tasks/hooks';
import { Mail, MoreVertical, Shield, Trash2, UserX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ConfirmationDialog } from '@/components/ConfirmationDialog';
import { useState } from 'react';
import { InviteMemberDialog } from './InviteMemberDialog';

export function TeamPage() {
  const { t } = useTranslation();
  const loggedUserId = useAuthStore((state) => state.user?.id);
  const { data: users, isLoading } = useUsers();
  const { mutate: toggleUserActive, isPending: isTogglingUser } = useToggleUserActive();
  const { mutate: deleteUser, isPending: isDeletingUser } = useDeleteUser();
  const { user: currentUser } = useAuthStore();
  const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'OWNER';

  const [confirmConfig, setConfirmConfig] = useState<{
    isOpen: boolean;
    type: 'delete' | 'toggle';
    userId: string;
    isActive?: boolean;
  }>({ isOpen: false, type: 'delete', userId: '' });

  const getRoleLabel = (role: string) => {
    if (role === 'OWNER') return t('team.roles.owner');
    if (role === 'ADMIN') return t('team.roles.admin');
    if (role === 'GUEST') return t('team.roles.guest');
    return t('team.roles.member');
  };

  const handleToggleUserActive = (userId: string, isActive: boolean) => {
    setConfirmConfig({
      isOpen: true,
      type: 'toggle',
      userId,
      isActive,
    });
  };

  const handleDeleteUser = (userId: string) => {
    setConfirmConfig({
      isOpen: true,
      type: 'delete',
      userId,
    });
  };

  const onConfirmAction = () => {
    if (confirmConfig.type === 'delete') {
      deleteUser(confirmConfig.userId);
    } else {
      toggleUserActive({
        userId: confirmConfig.userId,
        isActive: !confirmConfig.isActive,
      });
    }
    setConfirmConfig({ ...confirmConfig, isOpen: false });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-48 bg-white/5 animate-pulse rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-white/5 animate-pulse rounded-[2rem]" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">
            {t('team.title')}
          </h1>
          <p className="text-muted-foreground font-medium">{t('team.subtitle')}</p>
        </div>
        {isAdmin && <InviteMemberDialog />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((user) => (
          <div
            key={user.id}
            className="group p-8 rounded-[2.5rem] bg-card/50 border border-border hover:border-border/80 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-6">
              <Avatar className="h-16 w-16 border-2 border-border group-hover:scale-110 transition-transform duration-300">
                <AvatarImage src={user.avatarUrl || undefined} />
                <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">
                  {user.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              {isAdmin && user.id !== loggedUserId && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-foreground rounded-xl"
                      disabled={isTogglingUser || isDeletingUser}
                    >
                      <MoreVertical size={20} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleToggleUserActive(user.id, user.isActive !== false)}
                    >
                      <UserX className="mr-2 h-4 w-4" />
                      {user.isActive === false
                        ? t('team.reactivate_member')
                        : t('team.deactivate_member')}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {t('team.delete_member')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {user.name}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail size={14} />
                <span>{user.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <Badge className="bg-primary/10 text-primary border-primary/20 rounded-lg px-3 py-1">
                <Shield size={12} className="mr-1.5" />
                {getRoleLabel(user.role)}
              </Badge>
              <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                {user.isActive === false ? t('team.status.inactive') : t('common.status.active')}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ConfirmationDialog
        isOpen={confirmConfig.isOpen}
        onClose={() => setConfirmConfig({ ...confirmConfig, isOpen: false })}
        onConfirm={onConfirmAction}
        title={
          confirmConfig.type === 'delete'
            ? t('team.delete_member')
            : confirmConfig.isActive
              ? t('team.deactivate_member')
              : t('team.reactivate_member')
        }
        description={
          confirmConfig.type === 'delete'
            ? t('team.confirm_delete')
            : confirmConfig.isActive
              ? t('team.confirm_deactivate')
              : t('team.confirm_reactivate')
        }
        confirmText={t('common.confirm')}
        cancelText={t('common.cancel')}
        variant={confirmConfig.type === 'delete' ? 'destructive' : 'default'}
      />
    </div>
  );
}
