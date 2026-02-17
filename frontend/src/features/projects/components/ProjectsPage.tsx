import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Project } from '@/types';
import { Calendar, FolderKanban, Plus, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks';
import { CreateProjectDialog } from './CreateProjectDialog';

export default function ProjectsPage() {
  const { t } = useTranslation();
  const { data: projectsData, isLoading } = useProjects();
  const navigate = useNavigate();
  const projects = projectsData?.data || [];

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2 leading-tight">
            {t('projects.title')}
          </h1>
          <p className="text-muted-foreground font-medium">{t('projects.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder={t('projects.filter_placeholder')}
              className="pl-9 bg-accent/20 border-border focus-visible:ring-primary/30 w-[240px] rounded-xl text-foreground"
            />
          </div>
          <CreateProjectDialog
            trigger={
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] transition-all hover:scale-[1.02]">
                <Plus className="mr-2 h-4 w-4" /> {t('projects.new_project')}
              </Button>
            }
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 bg-white/5 animate-pulse rounded-[2rem]" />
          ))}
        </div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-20 rounded-3xl bg-card border border-border text-center space-y-6">
          <div className="size-20 bg-secondary/50 rounded-full flex items-center justify-center border border-border">
            <FolderKanban className="text-muted-foreground" size={40} />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{t('projects.no_projects_title')}</h3>
            <p className="text-muted-foreground max-w-sm">{t('projects.no_projects_desc')}</p>
          </div>
          <CreateProjectDialog />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer p-8 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 hover:bg-accent/5 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="size-14 bg-secondary/50 rounded-2xl flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-300">
                  <FolderKanban className="text-primary" size={24} />
                </div>
                <Badge className="bg-secondary text-muted-foreground border-border group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                  {project.status === 'ACTIVE'
                    ? t('common.status.active')
                    : project.status === 'ARCHIVED'
                      ? t('common.status.archived')
                      : t('common.status.completed')}
                </Badge>
              </div>

              <div className="space-y-2 mb-8 flex-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.name}
                </h3>
                <p className="text-muted-foreground line-clamp-3 leading-relaxed text-sm">
                  {project.description || t('projects.default_description')}
                </p>
              </div>

              <div className="pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium">
                  <Calendar size={14} />
                  <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="size-7 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[10px] font-bold text-muted-foreground">
                  U
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
