import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { Bell, Check, CheckCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { AppNotification } from "../api";
import {
  useMarkAllNotificationsAsRead,
  useMarkNotificationAsRead,
  useNotifications,
} from "../hooks";

export function NotificationsPopover() {
  const { t, i18n } = useTranslation();
  const { data: result, isLoading } = useNotifications();
  const { mutate: markAsRead } = useMarkNotificationAsRead();
  const { mutate: markAllAsRead } = useMarkAllNotificationsAsRead();

  const notifications = result?.data || [];
  const unreadCount =
    notifications.filter((n: AppNotification) => !n.isRead).length || 0;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-background" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 p-0 bg-popover border-border rounded-2xl overflow-hidden shadow-xl"
        align="end"
      >
        <div className="flex items-center justify-between p-4 border-b border-border bg-accent/20">
          <h4 className="text-sm font-bold text-foreground leading-none">
            {t("notifications.title")}
          </h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold uppercase">
              {unreadCount} {t("notifications.new")}
            </span>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 hover:bg-accent text-muted-foreground hover:text-foreground"
                onClick={() => markAllAsRead()}
                title={t("notifications.mark_all_read")}
              >
                <CheckCheck size={14} />
              </Button>
            )}
          </div>
        </div>
        <ScrollArea className="h-[350px]">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin size-5 border-2 border-primary border-t-transparent rounded-full mx-auto mb-3" />
              <p className="text-xs text-zinc-500">
                {t("notifications.loading")}
              </p>
            </div>
          ) : notifications.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-xs text-muted-foreground font-medium">
                {t("notifications.empty")}
              </p>
            </div>
          ) : (
            <div className="grid divide-y divide-border">
              {notifications.map((notification: AppNotification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "group flex items-start gap-4 p-4 transition-all hover:bg-accent/50",
                    !notification.isRead && "bg-primary/5",
                  )}
                >
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <p
                      className={cn(
                        "text-xs leading-relaxed break-words",
                        notification.isRead
                          ? "text-muted-foreground"
                          : "text-foreground font-medium",
                      )}
                    >
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] text-zinc-500 font-medium">
                        {formatDistanceToNow(new Date(notification.createdAt), {
                          addSuffix: true,
                          locale: i18n.language === "pt" ? ptBR : enUS,
                        })}
                      </p>
                    </div>
                  </div>
                  {!notification.isRead && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent text-muted-foreground hover:text-primary"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <Check size={14} />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
