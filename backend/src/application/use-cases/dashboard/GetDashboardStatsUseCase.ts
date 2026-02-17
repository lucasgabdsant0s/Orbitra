import type { IProjectRepository } from '../../../core/interfaces/repositories/IProjectRepository.js';
import type { ITaskRepository } from '../../../core/interfaces/repositories/ITaskRepository.js';

export interface DashboardStatsOutput {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  tasksByStatus: {
    todo: number;
    inProgress: number;
    done: number;
    blocked: number;
  };
  recentProjects: {
    id: string;
    name: string;
    createdAt: Date;
  }[];
}

export class GetDashboardStatsUseCase {
  constructor(
    private projectRepository: IProjectRepository,
    private taskRepository: ITaskRepository,
  ) {}

  async execute(tenantId: string): Promise<DashboardStatsOutput> {
    const projects = await this.projectRepository.findAll(tenantId, {
      page: 1,
      limit: 100,
    });
    const tasks = await this.taskRepository.findAll(tenantId, {
      page: 1,
      limit: 1000,
    });

    const tasksByStatus = tasks.data.reduce(
      (acc, task) => {
        const status = task.status.toLowerCase();
        if (status === 'todo') acc.todo++;
        else if (status === 'in_progress') acc.inProgress++;
        else if (status === 'done') acc.done++;
        else if (status === 'blocked') acc.blocked++;
        return acc;
      },
      { todo: 0, inProgress: 0, done: 0, blocked: 0 } as {
        todo: number;
        inProgress: number;
        done: number;
        blocked: number;
      },
    );

    return {
      totalProjects: projects.total,
      activeProjects: projects.data.filter((p) => p.status === 'ACTIVE').length,
      totalTasks: tasks.total,
      tasksByStatus,
      recentProjects: projects.data.slice(0, 5).map((p) => ({
        id: p.id!,
        name: p.name,
        createdAt: p.createdAt!,
      })),
    };
  }
}
