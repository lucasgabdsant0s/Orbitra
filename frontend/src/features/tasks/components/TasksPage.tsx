import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useProjects } from '@/features/projects/hooks';
import type { Task } from '@/types';
import { CheckSquare, FolderKanban } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks } from '../hooks';
import { KanbanTaskCard } from './KanbanTaskCard';
import { TaskDetailsDialog } from './TaskDetailsDialog';

export function TasksPage() {
  const { t } = useTranslation();
  const { data: projectsData, isLoading: isLoadingProjects } = useProjects();
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');
  const { data: tasksData, isLoading: isLoadingTasks } = useTasks(selectedProjectId);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const projects = projectsData?.data || [];
  const tasks = tasksData?.data || [];

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">
            {t('tasks.title')}
          </h1>
          <p className="text-muted-foreground font-medium">{t('tasks.subtitle')}</p>
        </div>

        <div className="flex items-center gap-4">
          <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
            <SelectTrigger className="w-[280px] bg-secondary/50 border-border text-foreground rounded-xl h-12">
              <SelectValue placeholder={t('tasks.select_project')} />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border text-popover-foreground rounded-xl">
              {projects.map((project) => (
                <SelectItem
                  key={project.id}
                  value={project.id}
                  className="focus:bg-accent cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <FolderKanban size={16} className="text-primary" />
                    <span>{project.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {!selectedProjectId ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] rounded-[2.5rem] bg-card/50 border border-border p-8 text-center animate-in fade-in duration-500">
          <div className="size-20 bg-muted rounded-full flex items-center justify-center border border-border mb-6">
            <FolderKanban className="text-muted-foreground" size={32} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {t('tasks.no_project_selected')}
          </h3>
          <p className="text-muted-foreground max-w-sm mb-8">
            {t('tasks.no_project_selected_desc')}
          </p>
        </div>
      ) : isLoadingTasks ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-muted animate-pulse rounded-[2rem]" />
          ))}
        </div>
      ) : tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] rounded-[2.5rem] bg-card/50 border border-border p-8 text-center animate-in fade-in duration-500">
          <div className="size-20 bg-muted rounded-full flex items-center justify-center border border-border mb-6">
            <CheckSquare className="text-muted-foreground" size={32} />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{t('tasks.no_tasks')}</h3>
          <p className="text-muted-foreground max-w-sm">{t('tasks.no_tasks_desc')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <KanbanTaskCard key={task.id} task={task} onClick={() => setSelectedTask(task)} />
          ))}
        </div>
      )}

      <TaskDetailsDialog
        task={selectedTask}
        open={!!selectedTask}
        onOpenChange={(open) => !open && setSelectedTask(null)}
      />
    </div>
  );
}
