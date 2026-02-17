import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthStore } from "@/stores/authStore";
import { AlertCircle, MessageSquare } from "lucide-react";
import type { Comment } from "../api";
import {
  useComments,
  useCreateComment,
  useDeleteComment,
  useUpdateComment,
} from "../hooks";
import { CommentForm } from "./CommentForm";
import { CommentItem } from "./CommentItem";

interface CommentSectionProps {
  projectId: string;
}

import { useTranslation } from "react-i18next";

export function CommentSection({ projectId }: CommentSectionProps) {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const {
    data: commentsData,
    isLoading,
    error,
    refetch,
  } = useComments(projectId, { limit: 100 });
  const { mutate: createComment, isPending: isCreating } =
    useCreateComment(projectId);
  const { mutate: updateComment } = useUpdateComment(projectId);
  const { mutate: deleteComment } = useDeleteComment(projectId);

  const comments = commentsData?.data || [];

  const buildCommentTree = (allComments: Comment[]): Comment[] => {
    if (!allComments || allComments.length === 0) return [];

    const commentMap = new Map<string, Comment & { replies: Comment[] }>();
    const rootComments: (Comment & { replies: Comment[] })[] = [];

    allComments.forEach((comment) => {
      commentMap.set(comment.id, { ...comment, replies: [] });
    });

    allComments.forEach((comment) => {
      const node = commentMap.get(comment.id)!;
      if (comment.parentId && commentMap.has(comment.parentId)) {
        const parent = commentMap.get(comment.parentId)!;
        parent.replies.push(node);
      } else {
        rootComments.push(node);
      }
    });

    return rootComments;
  };

  const commentThreads = buildCommentTree(comments);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-10 space-y-8 px-4">
        <Skeleton className="h-8 w-48 bg-white/5" />
        <Skeleton className="h-[150px] w-full bg-white/5 rounded-3xl" />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="size-10 rounded-full bg-white/5" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-20 w-full bg-white/5 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <div className="size-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-red-500">
          <AlertCircle size={32} />
        </div>
        <h3 className="text-xl font-bold text-white">
          Ops! Erro ao carregar comentários
        </h3>
        <p className="text-zinc-500 text-sm max-w-sm mx-auto">
          Ocorreu um problema ao buscar a conversa. Tente recarregar a página.
          {(error as any)?.response?.data?.message && (
            <span className="block mt-2 font-mono text-xs opacity-50">
              Error: {(error as any).response.data.message}
            </span>
          )}
        </p>
        <Button
          variant="outline"
          onClick={() => refetch()}
          className="border-white/10 text-white"
        >
          Tentar Novamente
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-10 px-4">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <MessageSquare className="text-primary" size={20} />
          {t("comments.feed_title")}
          <span className="ml-2 bg-white/5 text-[10px] px-2 py-1 rounded-full text-zinc-500 font-medium">
            {comments.length}
          </span>
        </h3>

        <div className="bg-white/5 border border-white/5 p-6 rounded-[2.5rem] shadow-xl shadow-black/20">
          <CommentForm
            placeholder={t("comments.placeholder")}
            onSubmit={(text) => createComment({ text })}
            isSubmitting={isCreating}
            submitLabel={t("comments.submit")}
          />
        </div>
      </div>

      <div className="space-y-10 pb-20">
        {commentThreads.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
            <div className="size-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
              <MessageSquare className="text-zinc-700 font-light" size={40} />
            </div>
            <h3 className="text-xl font-bold text-white">
              {t("comments.no_comments_title")}
            </h3>
            <p className="max-w-md text-zinc-500 text-sm">
              {t("comments.no_comments_desc")}
            </p>
          </div>
        ) : (
          commentThreads.map((thread) => (
            <CommentItem
              key={thread.id}
              comment={thread}
              currentUserId={user?.id}
              onReply={(parentId, text) => createComment({ text, parentId })}
              onEdit={(id, text) => updateComment({ id, text })}
              onDelete={(id) => {
                if (confirm(t("comments.confirm_delete"))) {
                  deleteComment(id);
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
