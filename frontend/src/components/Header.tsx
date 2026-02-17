import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/features/auth/hooks';
import { NotificationsPopover } from '@/features/notifications/components/NotificationsPopover';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <header className="h-20 border-b border-border bg-background/80 backdrop-blur-xl flex items-center justify-between px-10 sticky top-0 z-40">
      <div className="flex items-center gap-6 flex-1"></div>

      <div className="flex items-center gap-6">
        <LanguageSwitcher />
        <NotificationsPopover />

        <div className="h-8 w-px bg-border" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="pl-2 pr-1 h-12 hover:bg-accent rounded-2xl gap-3 transition-all"
            >
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-foreground leading-none">{user?.name}</span>
                <span className="text-[10px] text-muted-foreground font-medium tracking-tight uppercase mt-1">
                  Admin
                </span>
              </div>
              <Avatar className="h-9 w-9 border-2 border-border">
                <AvatarImage src={user?.avatarUrl || undefined} />
                <AvatarFallback className="bg-primary/20 text-primary font-bold">
                  {user?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-popover border-border p-2 rounded-2xl text-popover-foreground"
          >
            <DropdownMenuLabel className="font-bold px-3 py-2 text-muted-foreground uppercase text-[10px] tracking-widest">
              {t('nav.my_account')}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border mx-1" />
            <DropdownMenuItem className="rounded-xl focus:bg-accent cursor-pointer px-3 py-2.5">
              {t('nav.profile')}
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl focus:bg-accent cursor-pointer px-3 py-2.5">
              {t('nav.settings')}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border mx-1" />
            <DropdownMenuItem
              onClick={() => logout()}
              className="rounded-xl focus:bg-destructive/10 text-destructive focus:text-destructive cursor-pointer px-3 py-2.5"
            >
              {t('auth.logout')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
