import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { type Task, TaskPriority, TaskStatus } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Trash2 } from 'lucide-react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useDeleteTask, useUpdateTask } from '../hooks';
import { useUsers } from '../hooks';

const updateTaskSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().optional(),
  priority: z.nativeEnum(TaskPriority),
  status: z.nativeEnum(TaskStatus),
  assigneeId: z.string().nullable().optional(),
  dueDate: z.string().nullable().optional(),
});

type UpdateTaskForm = z.infer<typeof updateTaskSchema>;

interface TaskDetailsDialogProps {
  task: Task | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TaskDetailsDialog({ task, open, onOpenChange }: TaskDetailsDialogProps) {
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask(task?.projectId || '');
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask(task?.projectId || '');
  const { data: users } = useUsers();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UpdateTaskForm>({
    resolver: zodResolver(updateTaskSchema),
  });

  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description || '',
        priority: task.priority || TaskPriority.MEDIUM,
        status: task.status,
        assigneeId: task.assigneeId || null,
        dueDate: task.dueDate ? task.dueDate.split('T')[0] : null,
      });
    }
  }, [task, reset]);

  const onSubmit = (data: UpdateTaskForm) => {
    if (!task) return;

    const payload = {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : null,
    };

    updateTask(
      { taskId: task.id, data: payload as any },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      },
    );
  };

  const handleDelete = () => {
    if (!task) return;
    if (confirm(t('tasks.confirm_delete'))) {
      deleteTask(task.id, {
        onSuccess: () => onOpenChange(false),
      });
    }
  };

  if (!task) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-popover/95 backdrop-blur-2xl border-border rounded-[2.5rem] text-popover-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {t('tasks.details')}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="task-title"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                {t('tasks.title_label')}
              </Label>
              <Input
                id="task-title"
                className="text-lg font-bold bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
                {...register('title')}
              />
              {errors.title && (
                <span className="text-sm text-destructive">{errors.title.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="task-description"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                {t('tasks.description_label')}
              </Label>
              <Textarea
                id="task-description"
                className="min-h-[120px] resize-none bg-secondary/50 border-border text-foreground rounded-xl focus-visible:ring-primary/30"
                {...register('description')}
              />
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="task-priority"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                {t('tasks.priority_label')}
              </Label>
              <Select
                onValueChange={(val) => setValue('priority', val as TaskPriority)}
                defaultValue={task.priority}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-xl">
                  <SelectItem value={TaskPriority.LOW} className="focus:bg-white/5">
                    {t('kanban.priority.low')}
                  </SelectItem>
                  <SelectItem value={TaskPriority.MEDIUM} className="focus:bg-white/5">
                    {t('kanban.priority.medium')}
                  </SelectItem>
                  <SelectItem value={TaskPriority.HIGH} className="focus:bg-white/5">
                    {t('kanban.priority.high')}
                  </SelectItem>
                  <SelectItem value={TaskPriority.URGENT} className="focus:bg-white/5">
                    {t('kanban.priority.urgent')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="task-status"
                className="text-xs font-semibold text-muted-foreground uppercase tracking-wider"
              >
                {t('tasks.status_label')}
              </Label>
              <Select
                onValueChange={(val) => setValue('status', val as TaskStatus)}
                defaultValue={task.status}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-xl">
                  <SelectItem value={TaskStatus.TODO} className="focus:bg-white/5">
                    {t('kanban.todo')}
                  </SelectItem>
                  <SelectItem value={TaskStatus.IN_PROGRESS} className="focus:bg-white/5">
                    {t('kanban.in_progress')}
                  </SelectItem>
                  <SelectItem value={TaskStatus.DONE} className="focus:bg-white/5">
                    {t('kanban.done')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t('tasks.assignee_label')}
              </Label>
              <Select
                onValueChange={(val) => setValue('assigneeId', val === 'unassigned' ? null : val)}
                defaultValue={task.assigneeId || 'unassigned'}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-xl">
                  <SelectItem value="unassigned" className="focus:bg-white/5">
                    {t('tasks.unassigned')}
                  </SelectItem>
                  {users?.map((user) => (
                    <SelectItem key={user.id} value={user.id} className="focus:bg-white/5">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={user.avatarUrl || undefined} />
                          <AvatarFallback className="text-[10px]">
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {t('tasks.due_date')}
              </Label>
              <div className="relative">
                <Input
                  type="date"
                  className="bg-white/5 border-white/10 text-white rounded-xl h-11 focus-visible:ring-primary/30 pl-10"
                  {...register('dueDate')}
                />
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <Button
              type="button"
              variant="ghost"
              className="text-destructive hover:text-destructive hover:bg-destructive/10"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 mr-2" />
              )}
              {t('tasks.delete_task')}
            </Button>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="bg-transparent border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl px-6"
              >
                {t('common.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isUpdating}
                className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
              >
                {isUpdating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {t('tasks.save_changes')}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
