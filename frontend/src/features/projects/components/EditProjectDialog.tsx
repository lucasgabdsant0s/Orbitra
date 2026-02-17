import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Project } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useUpdateProject } from "../hooks";

const editProjectSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().optional(),
});

type EditProjectForm = z.infer<typeof editProjectSchema>;

interface EditProjectDialogProps {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditProjectDialog({
  project,
  open,
  onOpenChange,
}: EditProjectDialogProps) {
  const { t } = useTranslation();
  const { mutate: updateProject, isPending } = useUpdateProject();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditProjectForm>({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      name: project.name,
      description: project.description || "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: project.name,
        description: project.description || "",
      });
    }
  }, [open, project, reset]);

  const onSubmit = (data: EditProjectForm) => {
    updateProject(
      { id: project.id, data },
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-popover/95 backdrop-blur-2xl border-border rounded-[2.5rem] text-popover-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t("projects.edit_dialog.title")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label
              htmlFor="edit-name"
              className="text-muted-foreground font-medium ml-1"
            >
              {t("projects.edit_dialog.name_label")}
            </Label>
            <Input
              id="edit-name"
              className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="edit-description"
              className="text-muted-foreground font-medium ml-1"
            >
              {t("projects.edit_dialog.desc_label")}
            </Label>
            <Textarea
              id="edit-description"
              className="resize-none bg-secondary/50 border-border text-foreground rounded-xl h-32 focus-visible:ring-primary/30"
              {...register("description")}
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="bg-transparent border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
            >
              {t("projects.edit_dialog.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("projects.edit_dialog.submit")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
