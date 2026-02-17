import { cn } from '@/lib/utils';
import type { Task, TaskStatus } from '@/types';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { KanbanTaskCard } from './KanbanTaskCard';

interface KanbanColumnProps {
  id: TaskStatus;
  title: string;
  tasks: Task[];
  color: 'blue' | 'yellow' | 'green';
  onTaskClick?: (task: Task) => void;
}

const colorStyles = {
  blue: 'bg-blue-500/5 ring-1 ring-blue-500/10',
  yellow: 'bg-yellow-500/5 ring-1 ring-yellow-500/10',
  green: 'bg-green-500/5 ring-1 ring-green-500/10',
};

const headerColors = {
  blue: 'text-blue-400 bg-blue-400/10',
  yellow: 'text-yellow-400 bg-yellow-400/10',
  green: 'text-green-400 bg-green-400/10',
};

export function KanbanColumn({ id, title, tasks, color, onTaskClick }: KanbanColumnProps) {
  const { t } = useTranslation();
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      className={cn(
        'flex flex-col h-full min-h-0 rounded-[2rem] transition-all duration-500 bg-secondary/30 border border-transparent',
        colorStyles[color],
      )}
    >
      <div className="flex items-center justify-between p-6 pb-2">
        <h3 className="font-black text-[11px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3">
          <span
            className={cn(
              'size-2 rounded-full shadow-[0_0_8px_currentColor]',
              color === 'blue'
                ? 'bg-blue-500 text-blue-500'
                : color === 'yellow'
                  ? 'bg-yellow-500 text-yellow-500'
                  : 'bg-green-500 text-green-500',
            )}
          />
          {title}
          <span
            className={cn(
              'ml-1 rounded-lg px-2 py-0.5 text-[10px] font-black border border-border',
              headerColors[color],
            )}
          >
            {tasks.length}
          </span>
        </h3>
      </div>

      <div
        ref={setNodeRef}
        className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4 custom-scrollbar scroll-smooth"
      >
        <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <KanbanTaskCard key={task.id} task={task} onClick={() => onTaskClick?.(task)} />
          ))}
        </SortableContext>
        {tasks.length === 0 && (
          <div className="h-40 flex flex-col items-center justify-center text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground border border-dashed border-border rounded-[2rem] bg-secondary/20 group/empty transition-all duration-500 hover:border-primary/20 hover:bg-primary/5">
            <div className="size-12 rounded-[1.25rem] bg-background flex items-center justify-center mb-4 group-hover/empty:scale-110 group-hover/empty:bg-primary/10 transition-all duration-500 shadow-sm group-hover/empty:shadow-primary/20">
              <Plus
                size={20}
                className="text-muted-foreground group-hover/empty:text-primary transition-colors"
              />
            </div>
            <span className="opacity-40 group-hover:opacity-100 transition-opacity">
              {t('kanban.drop_here')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
