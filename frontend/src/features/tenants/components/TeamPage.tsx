import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/features/tasks/hooks";
import { Mail, MoreVertical, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TeamPage() {
  const { t } = useTranslation();
  const { data: users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-48 bg-white/5 animate-pulse rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-48 bg-white/5 animate-pulse rounded-[2rem]"
            />
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
            {t("team.title")}
          </h1>
          <p className="text-muted-foreground font-medium">
            {t("team.subtitle")}
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
          {t("team.invite_member")}
        </Button>
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
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground rounded-xl"
              >
                <MoreVertical size={20} />
              </Button>
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
                Admin
              </Badge>
              <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                {t("common.status.active")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
