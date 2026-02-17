import { CreateTaskDialog } from '@/features/tasks/components/CreateTaskDialog';
import { KanbanBoard } from '@/features/tasks/components/KanbanBoard';
import { useParams } from 'react-router-dom';

export default function KanbanPage() {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-destructive">ID do projeto não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card/50 backdrop-blur">
        <div className="container flex items-center justify-between h-16 px-6">
          <h1 className="text-2xl font-bold">Kanban Board</h1>
          <CreateTaskDialog projectId={projectId} />
        </div>
      </div>
      <KanbanBoard projectId={projectId} />
    </div>
  );
}
