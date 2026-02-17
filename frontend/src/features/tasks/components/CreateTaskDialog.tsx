import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TaskPriority, TaskStatus } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useCreateTask, useUsers } from "../hooks";

const createTaskSchema = z.object({
  title: z.string().min(1, "required"),
  description: z.string().optional(),
  status: z.nativeEnum(TaskStatus),
  priority: z.nativeEnum(TaskPriority),
  assigneeId: z.string().optional(),
  dueDate: z.date().optional(),
});

type CreateTaskForm = z.infer<typeof createTaskSchema>;

interface CreateTaskDialogProps {
  projectId: string;
}

export function CreateTaskDialog({ projectId }: CreateTaskDialogProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { mutate: createTask, isPending } = useCreateTask(projectId);
  const { data: users } = useUsers();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateTaskForm>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      status: TaskStatus.TODO,
      priority: TaskPriority.MEDIUM,
    },
  });

  const dueDate = watch("dueDate");
  const assigneeId = watch("assigneeId");

  const selectedUser = users?.find((u) => u.id === assigneeId);

  const onSubmit = (data: CreateTaskForm) => {
    createTask(
      {
        ...data,
        projectId,
        dueDate: data.dueDate?.toISOString(),
      },
      {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
          <Plus className="mr-2 h-4 w-4" /> {t("tasks.new_task")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-popover/95 backdrop-blur-2xl border-border rounded-[2rem] text-popover-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            {t("tasks.create_title")}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-muted-foreground font-medium ml-1">
              {t("tasks.fields.title")}
            </Label>
            <Input
              placeholder={t("tasks.placeholders.title")}
              className="bg-secondary/50 border-border text-foreground rounded-xl h-12 focus-visible:ring-primary/30"
              {...register("title")}
            />
            {errors.title && (
              <span className="text-sm text-destructive ml-1">
                {t("tasks.validation.title_required")}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground font-medium ml-1">
              {t("tasks.fields.description")}
            </Label>
            <Textarea
              placeholder={t("tasks.placeholders.description")}
              className="resize-none bg-secondary/50 border-border text-foreground rounded-xl h-24 focus-visible:ring-primary/30"
              {...register("description")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">
                {t("tasks.fields.assignee")}
              </Label>
              <Select onValueChange={(value) => setValue("assigneeId", value)}>
                <SelectTrigger className="bg-secondary/50 border-border text-foreground rounded-xl h-12">
                  <SelectValue placeholder={t("tasks.placeholders.assignee")}>
                    {selectedUser && (
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={selectedUser.avatarUrl || undefined}
                          />
                          <AvatarFallback className="bg-primary/20 text-[10px]">
                            {selectedUser.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{selectedUser.name}</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-popover-foreground rounded-xl">
                  {users?.map((user) => (
                    <SelectItem
                      key={user.id}
                      value={user.id}
                      className="focus:bg-accent cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={user.avatarUrl || undefined} />
                          <AvatarFallback className="bg-primary/20 text-[10px]">
                            {user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">
                {t("tasks.fields.due_date")}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal h-12 bg-secondary/50 border-border rounded-xl",
                      !dueDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? (
                      format(dueDate, "PPP", { locale: ptBR })
                    ) : (
                      <span>{t("tasks.placeholders.due_date")}</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover border-border rounded-2xl">
                  <Calendar
                    mode="single"
                    selected={dueDate}
                    onSelect={(date) => setValue("dueDate", date!)}
                    initialFocus
                    className="rounded-2xl border-border"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">
                {t("tasks.fields.priority")}
              </Label>
              <Select
                defaultValue={TaskPriority.MEDIUM}
                onValueChange={(value) =>
                  setValue("priority", value as TaskPriority)
                }
              >
                <SelectTrigger className="bg-secondary/50 border-border text-foreground rounded-xl h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-popover-foreground rounded-xl">
                  <SelectItem
                    value={TaskPriority.LOW}
                    className="focus:bg-accent"
                  >
                    {t("kanban.priority.low")}
                  </SelectItem>
                  <SelectItem
                    value={TaskPriority.MEDIUM}
                    className="focus:bg-accent"
                  >
                    {t("kanban.priority.medium")}
                  </SelectItem>
                  <SelectItem
                    value={TaskPriority.HIGH}
                    className="focus:bg-accent"
                  >
                    {t("kanban.priority.high")}
                  </SelectItem>
                  <SelectItem
                    value={TaskPriority.URGENT}
                    className="focus:bg-accent"
                  >
                    {t("kanban.priority.urgent")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-muted-foreground font-medium ml-1">
                {t("tasks.fields.status")}
              </Label>
              <Select
                defaultValue={TaskStatus.TODO}
                onValueChange={(value) =>
                  setValue("status", value as TaskStatus)
                }
              >
                <SelectTrigger className="bg-secondary/50 border-border text-foreground rounded-xl h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border text-popover-foreground rounded-xl">
                  <SelectItem
                    value={TaskStatus.TODO}
                    className="focus:bg-accent"
                  >
                    {t("kanban.todo")}
                  </SelectItem>
                  <SelectItem
                    value={TaskStatus.IN_PROGRESS}
                    className="focus:bg-accent"
                  >
                    {t("kanban.in_progress")}
                  </SelectItem>
                  <SelectItem
                    value={TaskStatus.DONE}
                    className="focus:bg-accent"
                  >
                    {t("kanban.done")}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="bg-transparent border-border text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl px-6"
            >
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
            >
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("tasks.create_button")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
