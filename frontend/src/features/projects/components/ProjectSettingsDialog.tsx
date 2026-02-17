import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Project } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Trash2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useDeleteProject, useUpdateProject } from '../hooks';

const updateProjectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().optional(),
  status: z.string().optional(),
});

type UpdateProjectForm = z.infer<typeof updateProjectSchema>;

interface ProjectSettingsDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectSettingsDialog({ project, open, onOpenChange }: ProjectSettingsDialogProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate: updateProject, isPending: isUpdating } = useUpdateProject();
  const { mutate: deleteProject, isPending: isDeleting } = useDeleteProject();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UpdateProjectForm>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues: {
      name: project.name,
      description: project.description || '',
      status: project.status,
    },
  });

  const onSubmit = (data: UpdateProjectForm) => {
    updateProject(
      { id: project.id, data },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      },
    );
  };

  const handleDelete = () => {
    if (confirm(t('projects.settings.confirm_delete'))) {
      deleteProject(project.id, {
        onSuccess: () => {
          navigate('/projects');
        },
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-popover/95 backdrop-blur-2xl border-border rounded-[2.5rem] text-popover-foreground outline-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {t('projects.settings.title')}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground font-medium ml-1">
              {t('projects.settings.name_label')}
            </Label>
            <Input
              className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-sm text-destructive ml-1">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground font-medium ml-1">
              {t('projects.settings.desc_label')}
            </Label>
            <Textarea
              className="resize-none bg-secondary/50 border-border text-foreground rounded-xl h-32 focus-visible:ring-primary/30"
              {...register('description')}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground font-medium ml-1">
              {t('projects.settings.status_label')}
            </Label>
            <Select onValueChange={(val) => setValue('status', val)} defaultValue={project.status}>
              <SelectTrigger className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border text-popover-foreground rounded-xl">
                <SelectItem value="ACTIVE" className="focus:bg-accent">
                  {t('common.status.active')}
                </SelectItem>
                <SelectItem value="ARCHIVED" className="focus:bg-accent">
                  {t('common.status.archived')}
                </SelectItem>
                <SelectItem value="COMPLETED" className="focus:bg-accent">
                  {t('common.status.completed')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex justify-between items-center bg-destructive/5 border border-destructive/10 p-6 rounded-2xl">
              <div className="space-y-0.5">
                <p className="text-sm font-bold text-destructive uppercase tracking-wider">
                  {t('projects.settings.danger_zone')}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('projects.settings.danger_zone_desc')}
                </p>
              </div>
              <Button
                type="button"
                variant="destructive"
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-xl h-10 px-4 bg-destructive/10 hover:bg-destructive/20 text-destructive border border-destructive/10 shadow-none"
              >
                {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 size={18} />}
              </Button>
            </div>

            <DialogFooter className="pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="bg-transparent border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl px-6"
              >
                {t('common.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isUpdating}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t('common.save_changes')}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
