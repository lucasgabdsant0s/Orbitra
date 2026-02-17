import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/features/auth/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useCreateProject } from "../hooks";

interface CreateProjectDialogProps {
  trigger?: React.ReactNode;
}

export function CreateProjectDialog({ trigger }: CreateProjectDialogProps) {
  const { t } = useTranslation();

  const createProjectSchema = z.object({
    name: z
      .string()
      .min(1, t("projects.create_dialog.validation.name_required")),
    description: z.string().optional(),
  });

  type CreateProjectForm = z.infer<typeof createProjectSchema>;
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { mutate: createProject, isPending } = useCreateProject();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateProjectForm>({
    resolver: zodResolver(createProjectSchema),
  });

  const onSubmit = (data: CreateProjectForm) => {
    createProject(data, {
      onSuccess: () => {
        setOpen(false);
        reset();
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] transition-all hover:scale-[1.02]">
            <PlusCircle className="mr-2 h-4 w-4" />
            {t("projects.create_dialog.title")}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-popover/95 backdrop-blur-2xl border-border rounded-[2.5rem] text-popover-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {t("projects.create_dialog.title")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-muted-foreground font-medium ml-1"
            >
              {t("projects.create_dialog.name_label")}
            </Label>
            <Input
              id="name"
              placeholder={t("projects.create_dialog.name_placeholder")}
              className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-sm text-destructive ml-1">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="description"
              className="text-muted-foreground font-medium ml-1"
            >
              {t("projects.create_dialog.desc_label")}
            </Label>
            <Textarea
              id="description"
              placeholder={t("projects.create_dialog.desc_placeholder")}
              className="resize-none bg-secondary/50 border-border text-foreground rounded-xl h-32 focus-visible:ring-primary/30"
              {...register("description")}
            />
          </div>
          <DialogFooter className="gap-2 sm:gap-0 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="bg-transparent border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl px-6"
            >
              {t("projects.create_dialog.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("projects.create_dialog.submit")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
