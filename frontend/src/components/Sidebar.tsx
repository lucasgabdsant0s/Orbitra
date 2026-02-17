import { useAuth } from '@/features/auth/hooks';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/stores/uiStore';
import {
  CheckSquare,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  Zap,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export function Sidebar() {
  const { t } = useTranslation();
  const isSidebarOpen = useUIStore((state) => state.sidebarOpen);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const { user, logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: t('nav.dashboard'), href: '/' },
    { icon: FolderKanban, label: t('nav.projects'), href: '/projects' },
    { icon: CheckSquare, label: t('nav.tasks'), href: '/tasks' },
    { icon: Users, label: t('nav.team'), href: '/team' },
    { icon: Settings, label: t('nav.settings'), href: '/settings' },
  ];

  return (
    <aside
      className={cn(
        'h-screen flex flex-col transition-all duration-500 ease-in-out border-r border-sidebar-border bg-sidebar/80 backdrop-blur-3xl z-50 sticky top-0',
        isSidebarOpen ? 'w-72' : 'w-24',
      )}
    >
      <div className="h-20 flex items-center px-6 mb-4">
        <div className="size-11 bg-primary rounded-[1.25rem] flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)] group overflow-hidden relative border border-sidebar-border">
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Zap className="text-white fill-white relative z-10" size={22} />
        </div>
        {isSidebarOpen && (
          <div className="ml-4 flex flex-col animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="text-xl font-[1000] text-sidebar-foreground tracking-[0.25em] leading-none">
              ORBITRA
            </span>
            <span className="text-[10px] text-primary font-black tracking-[0.4em] mt-1 opacity-80 uppercase">
              Management
            </span>
          </div>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden',
                isActive
                  ? 'bg-sidebar-accent text-sidebar-primary shadow-sm ring-1 ring-sidebar-border'
                  : 'text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50',
                !isSidebarOpen && 'justify-center px-0',
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
              )}
              <item.icon
                size={22}
                className={cn(
                  'shrink-0 transition-transform duration-300 relative z-10',
                  !isActive && 'group-hover:scale-110',
                  isActive && 'fill-primary/10',
                )}
              />
              {isSidebarOpen && (
                <span className="font-bold text-sm tracking-tight relative z-10">{item.label}</span>
              )}
              {!isSidebarOpen && (
                <div className="absolute left-full ml-4 px-3 py-2 bg-popover text-popover-foreground text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-border font-bold shadow-xl">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-2 p-4">
        {user && (
          <div
            className={cn(
              'flex items-center p-3 rounded-2xl bg-sidebar-accent/50 border border-sidebar-border transition-all duration-300',
              !isSidebarOpen && 'justify-center px-0 bg-transparent border-none',
            )}
          >
            <Avatar className="h-10 w-10 border border-sidebar-border ring-2 ring-background">
              <AvatarImage src={user.avatarUrl || undefined} />
              <AvatarFallback className="bg-primary/20 text-primary font-black text-xs">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {isSidebarOpen && (
              <div className="ml-3 flex-1 min-w-0">
                <p className="text-sm font-bold text-sidebar-foreground truncate leading-none mb-1">
                  {user.name}
                </p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider truncate">
                  {user.role}
                </p>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className={cn(
              'flex items-center justify-center p-3 rounded-xl bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-foreground/60 hover:text-sidebar-foreground transition-all group flex-1',
              !isSidebarOpen && 'w-full',
            )}
          >
            {isSidebarOpen ? (
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>
          {isSidebarOpen && (
            <button
              onClick={() => logout()}
              className="flex items-center justify-center p-3 rounded-xl bg-destructive/10 hover:bg-destructive/20 text-destructive transition-all group shadow-sm"
              title={t('auth.logout')}
            >
              <LogOut size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
