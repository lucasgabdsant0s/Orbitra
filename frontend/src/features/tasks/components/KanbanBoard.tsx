import { type Task, TaskStatus } from '@/types';
import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useMemo } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTasks, useUpdateTaskStatus } from '../hooks';
import { KanbanColumn } from './KanbanColumn';
import { KanbanTaskCard } from './KanbanTaskCard';
import { TaskDetailsDialog } from './TaskDetailsDialog';

interface KanbanBoardProps {
  projectId: string;
}

export function KanbanBoard({ projectId }: KanbanBoardProps) {
  const { t } = useTranslation();
  const { data: tasks, isLoading } = useTasks(projectId);
  const { mutate: updateTaskStatus } = useUpdateTaskStatus(projectId);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const tasksByStatus = useMemo(() => {
    const list = tasks?.data || [];
    return list.reduce(
      (acc: Record<TaskStatus, Task[]>, task: Task) => {
        if (acc[task.status]) {
          acc[task.status].push(task);
        }
        return acc;
      },
      {
        [TaskStatus.TODO]: [],
        [TaskStatus.IN_PROGRESS]: [],
        [TaskStatus.DONE]: [],
        [TaskStatus.BLOCKED]: [],
      } as Record<TaskStatus, Task[]>,
    );
  }, [tasks]);

  const handleDragStart = (event: DragStartEvent) => {
    const list = tasks?.data || [];
    const task = list.find((t: Task) => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id as string;

    let newStatus: TaskStatus | null = null;

    if (Object.values(TaskStatus).includes(over.id as any)) {
      newStatus = over.id as TaskStatus;
    } else {
      const list = tasks?.data || [];
      const overTask = list.find((t: Task) => t.id === over.id);
      if (overTask) {
        newStatus = overTask.status;
      }
    }

    if (activeTask && newStatus && activeTask.status !== newStatus) {
      updateTaskStatus({ id: taskId, status: newStatus });
    }
    setActiveTask(null);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {['TODO', 'IN_PROGRESS', 'DONE'].map((status) => (
          <div key={status} className="space-y-4">
            <div className="h-8 w-32 bg-white/5 animate-pulse rounded-xl" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-white/5 animate-pulse rounded-2xl border border-white/5"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-1 h-full min-h-0 overflow-hidden">
          <KanbanColumn
            id={TaskStatus.TODO}
            title={t('kanban.todo')}
            tasks={tasksByStatus[TaskStatus.TODO]}
            color="blue"
            onTaskClick={setSelectedTask}
          />
          <KanbanColumn
            id={TaskStatus.IN_PROGRESS}
            title={t('kanban.in_progress')}
            tasks={tasksByStatus[TaskStatus.IN_PROGRESS]}
            color="yellow"
            onTaskClick={setSelectedTask}
          />
          <KanbanColumn
            id={TaskStatus.DONE}
            title={t('kanban.done')}
            tasks={tasksByStatus[TaskStatus.DONE]}
            color="green"
            onTaskClick={setSelectedTask}
          />
        </div>

        <DragOverlay
          dropAnimation={{
            duration: 300,
            easing: 'cubic-bezier(0.18, 0.67, 0.6, 1.22)',
          }}
        >
          {activeTask ? (
            <div className="scale-105 transition-transform duration-300">
              <KanbanTaskCard task={activeTask} isDragging />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <TaskDetailsDialog
        task={selectedTask}
        open={!!selectedTask}
        onOpenChange={(open) => !open && setSelectedTask(null)}
      />
    </>
  );
}
