import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';

interface CommentFormProps {
  onSubmit: (text: string) => void;
  isSubmitting?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  onCancel?: () => void;
  initialValue?: string;
  submitLabel?: string;
}

export function CommentForm({
  onSubmit,
  isSubmitting,
  placeholder = 'Escreva um comentário...',
  autoFocus = false,
  onCancel,
  initialValue = '',
  submitLabel = 'Enviar',
}: CommentFormProps) {
  const [text, setText] = useState(initialValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit(text);
    if (!initialValue) setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="min-h-[100px] bg-white/5 border-white/10 text-white rounded-2xl resize-none focus-visible:ring-primary/30 transition-all placeholder:text-zinc-600"
      />
      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button
            type="button"
            variant="ghost"
            onClick={onCancel}
            className="text-zinc-500 hover:text-white"
          >
            Cancelar
          </Button>
        )}
        <Button
          type="submit"
          disabled={isSubmitting || !text.trim()}
          className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 h-10 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> {submitLabel}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
