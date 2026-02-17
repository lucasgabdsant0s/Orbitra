import type { Project } from "@/types";
import { ArrowRight, FolderKanban } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface RecentProjectsProps {
  projects: Project[];
  isLoading: boolean;
}

export function RecentProjects({ projects, isLoading }: RecentProjectsProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="h-48 bg-card/5 animate-pulse rounded-3xl" />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0">
      {projects.slice(0, 4).map((project) => (
        <div
          key={project.id}
          onClick={() => navigate(`/projects/${project.id}`)}
          className="group cursor-pointer p-5 rounded-3xl bg-card border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-300 flex flex-col justify-between h-36 relative overflow-hidden shadow-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-start justify-between relative z-10">
            <div className="size-10 bg-secondary/50 rounded-xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-300">
              <FolderKanban
                className="text-primary/70 group-hover:text-primary transition-colors"
                size={18}
              />
            </div>
            <ArrowRight
              className="text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1"
              size={16}
            />
          </div>

          <div className="space-y-1 relative z-10">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 leading-tight">
              {project.name}
            </h3>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              {t("dashboard.recent_projects.created_at")}{" "}
              {new Date(project.createdAt).toLocaleDateString(i18n.language)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
