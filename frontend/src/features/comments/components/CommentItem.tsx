import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { clsx } from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import { enUS, ptBR } from 'date-fns/locale';
import {
  ChevronDown,
  ChevronUp,
  CornerDownRight,
  Edit2,
  MessageSquare,
  MoreHorizontal,
  Reply,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Comment } from '../api';
import { CommentForm } from './CommentForm';

interface CommentItemProps {
  comment: Comment;
  currentUserId?: string;
  onReply: (parentId: string, text: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  parentUserName?: string;
  level?: number;
}

const TEXT_THRESHOLD = 320;

export function CommentItem({
  comment,
  currentUserId,
  onReply,
  onEdit,
  onDelete,
  parentUserName,
  level = 0,
}: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReplies, setShowReplies] = useState(true);
  const { t, i18n } = useTranslation();

  const canManage = currentUserId === comment.userId;
  const isReply = level > 0;
  const hasReplies = comment.replies && comment.replies.length > 0;

  const shouldTruncate = comment.text.length > TEXT_THRESHOLD;
  const displayText =
    shouldTruncate && !isExpanded
      ? `${comment.text.substring(0, TEXT_THRESHOLD)}...`
      : comment.text;

  return (
    <div className={clsx('group flex gap-3 relative', isReply && 'mt-4')}>
      {isReply && <div className="absolute -left-6 top-5 bottom-0 w-px bg-white/5" />}

      <Avatar className={clsx('ring-2 ring-white/5 shrink-0', isReply ? 'size-8' : 'size-10')}>
        <AvatarImage src={comment.userAvatar || undefined} />
        <AvatarFallback className="bg-primary/10 text-primary text-xs">
          {comment.userName?.charAt(0) || '?'}
        </AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2 min-w-0">
        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none relative transition-colors group-hover:border-white/10">
          <div className="flex items-center justify-between mb-1 gap-2">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="font-bold text-white text-sm truncate">{comment.userName}</span>

              {parentUserName && (
                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                  <CornerDownRight size={10} className="text-primary/50" />
                  <span>{t('comments.reply_to')}</span>
                  <span className="text-zinc-300 font-medium">{parentUserName}</span>
                </div>
              )}

              <span className="text-[10px] text-zinc-600 uppercase tracking-tighter shrink-0">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                  locale: i18n.language === 'pt' ? ptBR : enUS,
                })}
              </span>
            </div>

            {canManage && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 text-zinc-500 hover:text-white rounded-full shrink-0"
                  >
                    <MoreHorizontal size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-zinc-900 border-white/10 text-white rounded-xl">
                  <DropdownMenuItem onClick={() => setIsEditing(true)} className="focus:bg-white/5">
                    <Edit2 size={12} className="mr-2" /> {t('comments.edit')}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => onDelete(comment.id)}
                    className="focus:bg-white/5 text-red-100 focus:text-red-400"
                  >
                    <Trash2 size={12} className="mr-2" /> {t('comments.delete')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {isEditing ? (
            <CommentForm
              initialValue={comment.text}
              submitLabel={t('comments.save')}
              onSubmit={(text) => {
                onEdit(comment.id, text);
                setIsEditing(false);
              }}
              onCancel={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap break-words">
                {displayText}
              </p>
              {shouldTruncate && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-auto p-0 text-primary hover:text-primary/80 text-xs font-bold transition-all flex items-center gap-1"
                >
                  {isExpanded ? (
                    <>
                      {t('comments.view_less')} <ChevronUp size={12} />
                    </>
                  ) : (
                    <>
                      {t('comments.view_more')} <ChevronDown size={12} />
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 ml-1">
          {!isEditing && (
            <Button
              variant="link"
              size="sm"
              onClick={() => setIsReplying(!isReplying)}
              className="h-auto p-0 text-xs text-zinc-500 hover:text-primary font-semibold transition-colors"
            >
              <Reply size={12} className="mr-1" /> {t('comments.reply_verb')}
            </Button>
          )}

          {hasReplies && (
            <Button
              variant="link"
              size="sm"
              onClick={() => setShowReplies(!showReplies)}
              className="h-auto p-0 text-xs text-zinc-400 hover:text-white font-medium transition-colors flex items-center gap-1"
            >
              <MessageSquare size={12} className="text-primary/60" />
              {showReplies ? (
                <>{t('comments.hide_replies')}</>
              ) : (
                <>
                  {comment.replies!.length === 1
                    ? t('comments.show_replies_one')
                    : t('comments.show_replies_other', {
                        count: comment.replies!.length,
                      })}
                </>
              )}
              {showReplies ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </Button>
          )}
        </div>

        {isReplying && (
          <div className="mt-4 animate-in slide-in-from-top-2 duration-200">
            <CommentForm
              autoFocus
              placeholder={t('comments.reply_placeholder', {
                name: comment.userName,
              })}
              submitLabel={t('comments.reply_verb')}
              onSubmit={(text) => {
                onReply(comment.id, text);
                setIsReplying(false);
              }}
              onCancel={() => setIsReplying(false)}
            />
          </div>
        )}

        {hasReplies && showReplies && (
          <div className="mt-4 space-y-4 pl-6 relative">
            <div className="absolute left-[3px] top-0 bottom-4 w-px bg-white/5" />

            {comment.replies!.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                currentUserId={currentUserId}
                onReply={onReply}
                onEdit={onEdit}
                onDelete={onDelete}
                parentUserName={comment.userName}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
