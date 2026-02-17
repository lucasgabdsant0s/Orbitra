import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/features/projects/hooks";
import { useUsers } from "@/features/tasks/hooks";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import {
  ArrowUpRight,
  ClipboardList,
  Clock,
  FileEdit,
  FilePlus,
  FileX,
  FolderKanban,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDashboardActivity } from "../hooks";
import { RecentProjects } from "./RecentProjects";

export function DashboardPage() {
  const { t, i18n } = useTranslation();
  const { data: projectsData, isLoading: isLoadingProjects } = useProjects();
  const { data: users } = useUsers();
  const { data: activityData, isLoading: isLoadingActivity } =
    useDashboardActivity();
  const navigate = useNavigate();
  const projects = projectsData?.data || [];
  const activities = activityData?.data || [];

  const stats = [
    {
      label: t("dashboard.total_projects"),
      value: projects.length.toString(),
      icon: FolderKanban,
      color: "blue",
    },
  ];

  const getActionIcon = (type: string, action: string) => {
    if (type === "TASK") {
      if (action === "CREATE")
        return <FilePlus className="h-4 w-4 text-green-500" />;
      if (action === "UPDATE")
        return <FileEdit className="h-4 w-4 text-blue-500" />;
      if (action === "DELETE")
        return <FileX className="h-4 w-4 text-red-500" />;
    }
    if (type === "COMMENT") {
      return <MessageSquare className="h-4 w-4 text-purple-500" />;
    }
    if (type === "PROJECT") {
      if (action === "UPDATE")
        return <Settings className="h-4 w-4 text-orange-500" />;
    }
    return <ClipboardList className="h-4 w-4 text-gray-400" />;
  };

  const getActionText = (log: any) => {
    const { entityType, action, changes } = log;

    if (entityType === "TASK") {
      if (action === "CREATE")
        return `${t("dashboard.activity.created_task")} "${changes.title}"`;
      if (action === "UPDATE")
        return `${t("dashboard.activity.updated_task")} "${changes.title || ` (ID: ${log.entityId})`}"`;
      if (action === "DELETE")
        return `${t("dashboard.activity.deleted_task")} "${changes.title || ` (ID: ${log.entityId})`}"`;
    }

    if (entityType === "COMMENT") {
      if (action === "CREATE")
        return `${t("dashboard.activity.created_comment")}: "${changes.text}"`;
      if (action === "UPDATE")
        return `${t("dashboard.activity.updated_comment")}: "${changes.text}"`;
      if (action === "DELETE") return t("dashboard.activity.deleted_comment");
    }

    if (entityType === "PROJECT") {
      if (action === "CREATE") return t("dashboard.activity.created_project");
      if (action === "UPDATE") return t("dashboard.activity.updated_project");
    }

    return t("dashboard.activity.unknown", {
      action: action.toLowerCase(),
      entity: entityType.toLowerCase(),
    });
  };

  return (
    <div className="h-full flex flex-col space-y-8 overflow-hidden relative">
      <div className="shrink-0 relative overflow-hidden rounded-[2.5rem] bg-card border border-border p-6 md:p-8 shadow-sm">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -mr-48 -mt-48 animate-pulse duration-[10s]" />
        <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-blue-500/5 blur-[80px] rounded-full -ml-24 -mb-24" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-[1000] tracking-tight text-foreground leading-[1.1]">
              {t("dashboard.welcome")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-foreground/60">
                {t("dashboard.subtitle")}
              </span>
            </h1>
            <p className="text-muted-foreground font-medium text-sm max-w-sm">
              {t("dashboard.description")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() => navigate("/projects")}
              variant="outline"
              className="bg-background/50 border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-2xl h-10 px-6 text-sm font-bold transition-all backdrop-blur-md"
            >
              {t("dashboard.view_projects")}
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-2xl h-10 px-6 text-sm font-bold shadow-[0_10px_40px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              onClick={() => navigate("/projects")}
            >
              <Plus className="mr-2 h-4 w-4 stroke-[3]" />{" "}
              {t("dashboard.new_project")}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
        <div className="lg:col-span-2 flex flex-col gap-6 min-h-0 min-w-0">
          <div className="shrink-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden p-6 rounded-[2rem] bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-2 relative z-10">
                  <div
                    className={cn(
                      "p-3 rounded-2xl transition-all group-hover:scale-110 duration-500 shadow-lg",
                      stat.color === "blue" &&
                        "bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20",
                    )}
                  >
                    <stat.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                <div className="space-y-0.5 relative z-10">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-[900] text-foreground tabular-nums tracking-tight">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 flex flex-col min-h-0 space-y-4">
            <div className="flex items-center justify-between px-2 shrink-0">
              <h2 className="text-xl font-[1000] text-foreground tracking-tight flex items-center gap-3">
                {t("dashboard.recent_projects.title")}
              </h2>
              <Button
                variant="ghost"
                onClick={() => navigate("/projects")}
                className="h-8 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 font-bold transition-all rounded-xl"
              >
                {t("dashboard.see_all")}
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar min-h-0">
              <RecentProjects
                projects={projects}
                isLoading={isLoadingProjects}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 min-h-0 min-w-0">
          <h2 className="text-xl font-[1000] text-foreground tracking-tight px-2 shrink-0">
            {t("dashboard.team_activity")}
          </h2>
          <div className="flex-1 p-6 rounded-[2.5rem] bg-card border border-border flex flex-col items-start min-h-0 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {isLoadingActivity ? (
              <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                <div className="animate-spin size-8 border-4 border-primary border-t-transparent rounded-full" />
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">
                  {t("common.loading")}
                </p>
              </div>
            ) : activities.length === 0 ? (
              <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-6">
                <div className="size-16 rounded-3xl bg-secondary flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Clock
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    size={30}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="space-y-2 max-w-[240px] relative z-10">
                  <p className="text-lg font-black text-foreground tracking-tight">
                    {t("dashboard.no_activity")}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    {t("dashboard.no_activity_desc")}
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full space-y-6 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                {activities.map((log) => (
                  <div key={log.id} className="flex gap-4 group/item">
                    <div className="relative shrink-0">
                      <Avatar className="h-10 w-10 border border-border shadow-sm ring-1 ring-background">
                        <AvatarImage src={log.userAvatar || undefined} />
                        <AvatarFallback className="bg-primary/20 text-primary font-black text-xs">
                          {log.userName?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -right-1 -bottom-1 rounded-lg bg-card p-1 border border-border shadow-sm">
                        {getActionIcon(log.entityType, log.action)}
                      </div>
                    </div>

                    <div className="flex flex-col min-w-0 flex-1">
                      <p className="text-sm text-muted-foreground leading-snug group-hover/item:text-foreground transition-colors">
                        <span className="font-black text-foreground">
                          {log.userName || "Unknown"}
                        </span>{" "}
                        {getActionText(log)}
                      </p>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">
                        {formatDistanceToNow(new Date(log.timestamp), {
                          addSuffix: true,
                          locale: i18n.language === "pt" ? ptBR : enUS,
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
