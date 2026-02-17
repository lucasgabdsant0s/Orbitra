import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { type Task, TaskPriority } from '@/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowDown, ArrowRight, ArrowUp, GripVertical } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface KanbanTaskCardProps {
  task: Task;
  isDragging?: boolean;
  onClick?: () => void;
}

const priorityStyles = {
  [TaskPriority.URGENT]: {
    border: 'border-red-500/40 hover:border-red-500/60 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]',
    bg: 'bg-gradient-to-br from-red-500/10 via-red-500/5 to-transparent',
    indicator: 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)]',
    text: 'text-red-400 font-black',
    icon: <AlertCircle size={12} className="text-red-400" />,
  },
  [TaskPriority.HIGH]: {
    border:
      'border-orange-500/40 hover:border-orange-500/60 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)]',
    bg: 'bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent',
    indicator: 'bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)]',
    text: 'text-orange-400 font-black',
    icon: <ArrowUp size={12} className="text-orange-400" />,
  },
  [TaskPriority.MEDIUM]: {
    border:
      'border-primary/40 hover:border-primary/60 shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.3)]',
    bg: 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent',
    indicator: 'bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),1)]',
    text: 'text-primary font-black',
    icon: <ArrowRight size={12} className="text-primary" />,
  },
  [TaskPriority.LOW]: {
    border:
      'border-blue-500/40 hover:border-blue-500/60 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]',
    bg: 'bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent',
    indicator: 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]',
    text: 'text-blue-400 font-black',
    icon: <ArrowDown size={12} className="text-blue-400" />,
  },
};

export function KanbanTaskCard({ task, isDragging, onClick }: KanbanTaskCardProps) {
  const { t } = useTranslation();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isSortableDragging ? 0.5 : 1,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className={cn(
          'cursor-pointer backdrop-blur-xl transition-all duration-500 group relative overflow-hidden rounded-[1.25rem] border hover:shadow-2xl',
          priorityStyles[task.priority].border,
          priorityStyles[task.priority].bg,
          isDragging
            ? 'shadow-2xl ring-2 ring-primary/40 rotate-[1deg] z-50 bg-card/90'
            : 'bg-card/40 hover:bg-card/60',
        )}
        onClick={onClick}
      >
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-1.5 opacity-100 transition-opacity',
            priorityStyles[task.priority].indicator.split(' ')[0],
          )}
        />

        <div
          className={cn(
            'absolute left-4 top-4 w-3 h-3 rounded-full border-2 border-background/20 z-10',
            priorityStyles[task.priority].indicator,
          )}
        />
        <CardHeader className="p-4 pb-2 space-y-0 pl-10">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-sm font-[1000] leading-tight text-foreground group-hover:text-foreground transition-colors tracking-tight">
              {task.title}
            </CardTitle>
            <button
              {...attributes}
              {...listeners}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-grab active:cursor-grabbing opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-accent"
              onClick={(e) => e.stopPropagation()}
            >
              <GripVertical size={14} />
            </button>
          </div>
        </CardHeader>
        {task.description && (
          <CardContent className="p-4 pt-0 pb-3 pl-10">
            <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
              {task.description}
            </p>
          </CardContent>
        )}
        <CardFooter className="p-4 pt-0 pl-10 flex justify-between items-center">
          <div className="flex items-center gap-1.5 group-hover:scale-105 transition-transform">
            {priorityStyles[task.priority].icon}
            <span
              className={cn(
                'text-[10px] uppercase font-black tracking-[0.2em]',
                priorityStyles[task.priority].text,
              )}
            >
              {t(`kanban.priority.${task.priority.toLowerCase()}`)}
            </span>
          </div>
          {task.assignee ? (
            <Avatar className="h-6 w-6 border border-border ring-2 ring-background">
              <AvatarImage src={task.assignee.avatarUrl || undefined} />
              <AvatarFallback className="text-[10px] bg-primary/30 text-white font-black">
                {task.assignee.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <div className="h-6 w-6 rounded-full bg-secondary border border-dashed border-border flex items-center justify-center text-[10px] text-muted-foreground font-bold hover:border-primary/30 transition-colors">
              ?
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
