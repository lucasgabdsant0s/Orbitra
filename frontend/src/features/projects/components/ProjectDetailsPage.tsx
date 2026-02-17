import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommentSection } from "@/features/comments/components/CommentSection";
import { useComments } from "@/features/comments/hooks";
import { CreateTaskDialog } from "@/features/tasks/components/CreateTaskDialog";
import { KanbanBoard } from "@/features/tasks/components/KanbanBoard";
import { useUsers } from "@/features/tasks/hooks";
import {
  Calendar,
  ChevronLeft,
  History,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users as UsersIcon,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useProject } from "../hooks";
import { ProjectHistory } from "./ProjectHistory";
import { ProjectSettingsDialog } from "./ProjectSettingsDialog";

export function ProjectDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { data: project, isLoading } = useProject(id!);
  const { data: users } = useUsers();
  const { data: commentsData } = useComments(id!);

  if (isLoading) {
    return <ProjectDetailsSkeleton />;
  }

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-foreground">
          {t("projects.not_found")}
        </h2>
        <Button onClick={() => navigate("/projects")}>
          {t("projects.back_to_projects")}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full -m-6">
      <div className="bg-background/80 backdrop-blur-xl border-b border-border p-4 md:p-6 px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/projects")}
                className="h-8 text-muted-foreground hover:text-foreground -ml-2 p-1"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-2xl font-black text-foreground tracking-tight truncate">
                {project.name}
              </h1>
              <Badge className="bg-secondary text-secondary-foreground border-border text-[10px] uppercase font-black tracking-widest px-2 py-0 border">
                {project.status === "ACTIVE"
                  ? t("common.status.active")
                  : project.status === "ARCHIVED"
                    ? t("common.status.archived")
                    : t("common.status.completed")}
              </Badge>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-[11px] font-bold">
              <div className="flex items-center gap-1.5 uppercase tracking-widest">
                <Calendar size={12} className="text-primary" />
                <span>
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 uppercase tracking-widest border-l border-border pl-4">
                <UsersIcon size={12} className="text-primary" />
                <span>
                  {users?.length || 0} {t("projects.membros")}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <CreateTaskDialog projectId={id!} />
            <Button
              onClick={() => setIsSettingsOpen(true)}
              variant="outline"
              className="bg-secondary border-border text-muted-foreground hover:text-foreground rounded-xl h-9 text-xs font-bold"
            >
              <Settings className="mr-2 h-4 w-4" /> {t("nav.settings")}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
        <Tabs defaultValue="kanban" className="flex-1 min-h-0 flex flex-col">
          <div className="px-10 pt-6 border-b border-border bg-muted/30 shrink-0">
            <TabsList className="bg-transparent border-none p-0 h-auto gap-8">
              <TabsTrigger
                value="kanban"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-muted-foreground data-[state=active]:text-foreground font-semibold transition-all"
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />{" "}
                {t("projects.tabs.kanban")}
              </TabsTrigger>
              <TabsTrigger
                value="comments"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-muted-foreground data-[state=active]:text-foreground font-semibold transition-all"
              >
                <MessageSquare className="mr-2 h-4 w-4" />{" "}
                {t("projects.tabs.comments")}
                {commentsData?.total !== undefined && (
                  <span className="ml-2 bg-secondary text-[10px] px-1.5 py-0.5 rounded-full">
                    {commentsData.total}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent rounded-none px-0 py-4 text-muted-foreground data-[state=active]:text-foreground font-semibold transition-all"
              >
                <History className="mr-2 h-4 w-4" />{" "}
                {t("projects.tabs.history")}
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden px-4 md:px-10 flex flex-col">
            <TabsContent
              value="kanban"
              className="flex-1 min-h-0 m-0 outline-none flex flex-col"
            >
              <KanbanBoard projectId={id!} />
            </TabsContent>

            <TabsContent
              value="comments"
              className="h-full m-0 outline-none overflow-y-auto custom-scrollbar"
            >
              <CommentSection projectId={id!} />
            </TabsContent>

            <TabsContent
              value="history"
              className="h-full m-0 outline-none overflow-y-auto custom-scrollbar"
            >
              <div className="py-10 max-w-4xl mx-auto h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">
                    {t("projects.history_title")}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {t("projects.history_subtitle")}
                  </p>
                </div>

                <div className="bg-card border border-border rounded-3xl overflow-hidden backdrop-blur-sm shadow-sm">
                  <ProjectHistory projectId={id!} />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {project && (
        <ProjectSettingsDialog
          project={project}
          open={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
        />
      )}
    </div>
  );
}

function ProjectDetailsSkeleton() {
  return (
    <div className="flex flex-col h-full -m-6 animate-pulse">
      <div className="bg-muted/30 p-8 px-10 border-b border-border space-y-4">
        <Skeleton className="h-8 w-64 bg-muted" />
        <Skeleton className="h-20 w-full max-w-2xl bg-muted" />
        <div className="flex gap-4">
          <Skeleton className="h-4 w-32 bg-muted" />
          <Skeleton className="h-4 w-32 bg-muted" />
        </div>
      </div>
      <div className="px-10 pt-6 space-y-8">
        <div className="flex gap-8 border-b border-border">
          <Skeleton className="h-10 w-24 bg-muted" />
          <Skeleton className="h-10 w-24 bg-muted" />
          <Skeleton className="h-10 w-24 bg-muted" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Skeleton className="h-[400px] w-full bg-muted rounded-2xl" />
          <Skeleton className="h-[400px] w-full bg-muted rounded-2xl" />
          <Skeleton className="h-[400px] w-full bg-muted rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
