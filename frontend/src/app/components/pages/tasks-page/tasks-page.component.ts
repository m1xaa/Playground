import { Component } from '@angular/core';
import { Kid } from '../../../models/as-is/kid';
import { TaskService } from '../../../service/task.service';
import { Task } from '../../../models/as-is/task';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { DeleteTasksModalComponent } from './delete-tasks-modal/delete-tasks-modal.component';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [
    NgForOf,
    DeleteTasksModalComponent,
    CommonModule
  ],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent {
  kid!: Kid;
  tasks: Task[] = [];
  selectedTask!: Task;
  showDeleteModal = false;
  
  constructor(private taskService: TaskService) {
    this.getKid();
    this.getTasks();
  }

  getKid() {
    if (history.state && history.state.kid) {
      this.kid = history.state.kid;
    }
  }

  getTasks() {
    this.taskService.getAll(this.kid.id).subscribe(tasks => {
      if (tasks) {
        this.tasks = tasks;
      }
    });
  }

  addTask() {
    this.taskService.create(this.kid.id).subscribe(task => {
      if (task) {
        this.tasks = [...this.tasks, task];
      }
    });
  }

  openDeleteModal(task: Task) {
    this.selectedTask = task;
    this.showDeleteModal = true;
  }

  onCancel() {
    this.showDeleteModal = false;
  }

  onDelete() {
    this.taskService.delete(this.kid.id, this.selectedTask.id).subscribe(() => {
      const index = this.tasks.findIndex(t => t.id = this.selectedTask.id);
      this.tasks.splice(index, 1);
    });
    this.showDeleteModal = false;
  }
}
