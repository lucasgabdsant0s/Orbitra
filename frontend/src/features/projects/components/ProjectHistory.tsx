import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import type { AuditLog } from '@/types';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ClipboardList, FileEdit, FilePlus, FileX, MessageSquare, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useProjectHistory } from '../hooks';

interface ProjectHistoryProps {
  projectId: string;
}

export function ProjectHistory({ projectId }: ProjectHistoryProps) {
  const { t } = useTranslation();
  const { data: history, isLoading } = useProjectHistory(projectId);

  if (isLoading) {
    return (
      <div className="space-y-4 p-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-3 w-[100px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  const getActionIcon = (type: string, action: string) => {
    if (type === 'TASK') {
      if (action === 'CREATE') return <FilePlus className="h-4 w-4 text-green-500" />;
      if (action === 'UPDATE') return <FileEdit className="h-4 w-4 text-blue-500" />;
      if (action === 'DELETE') return <FileX className="h-4 w-4 text-red-500" />;
    }
    if (type === 'COMMENT') {
      return <MessageSquare className="h-4 w-4 text-purple-500" />;
    }
    if (type === 'PROJECT') {
      if (action === 'UPDATE') return <Settings className="h-4 w-4 text-orange-500" />;
    }
    return <ClipboardList className="h-4 w-4 text-muted-foreground" />;
  };

  const getActionText = (log: AuditLog) => {
    const { entityType, action, changes } = log;

    if (entityType === 'TASK') {
      if (action === 'CREATE')
        return t('projects.history_actions.created_task', {
          task: changes.title,
        });
      if (action === 'UPDATE')
        return t('projects.history_actions.updated_task', {
          task: changes.title || `(ID: ${log.entityId})`,
        });
      if (action === 'DELETE')
        return t('projects.history_actions.deleted_task', {
          task: changes.title || `(ID: ${log.entityId})`,
        });
    }

    if (entityType === 'COMMENT') {
      if (action === 'CREATE')
        return t('projects.history_actions.created_comment', {
          text: changes.text,
        });
      if (action === 'UPDATE')
        return t('projects.history_actions.updated_comment', {
          text: changes.text,
        });
      if (action === 'DELETE') return t('projects.history_actions.deleted_comment');
    }

    if (entityType === 'PROJECT') {
      if (action === 'CREATE') return t('projects.history_actions.created_project');
      if (action === 'UPDATE') return t('projects.history_actions.updated_project');
    }

    return t('projects.history_actions.unknown', {
      action: action.toLowerCase(),
      entity: entityType.toLowerCase(),
    });
  };

  return (
    <ScrollArea className="h-[600px] w-full border-none">
      <div className="space-y-6 p-4">
        {history?.data.map((log) => (
          <div key={log.id} className="relative flex gap-4">
            <div className="relative z-10 flex flex-col items-center">
              <Avatar className="h-8 w-8 border-2 border-background shadow-sm">
                <AvatarImage src={log.userAvatar || undefined} />
                <AvatarFallback className="bg-muted text-muted-foreground font-bold">
                  {log.userName?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -right-1 -bottom-1 rounded-full bg-background p-0.5 shadow-sm ring-1 ring-border">
                {getActionIcon(log.entityType, log.action)}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-sm">
                <span className="font-semibold text-foreground">{log.userName || 'Usuário'}</span>{' '}
                <span className="text-muted-foreground">{getActionText(log)}</span>
              </span>
              <span className="text-xs text-muted-foreground/70">
                {formatDistanceToNow(new Date(log.timestamp), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </div>
          </div>
        ))}

        {(!history?.data || history.data.length === 0) && (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground">
            <ClipboardList className="mb-2 h-8 w-8 opacity-20" />
            <p className="text-sm italic">{t('projects.history_empty')}</p>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
