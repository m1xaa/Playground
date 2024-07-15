import { Component } from '@angular/core';
import { Kid } from '../../../models/as-is/kid';
import { TaskService } from '../../../service/task.service';
import { Task } from '../../../models/as-is/task';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})
export class TasksPageComponent {
  kid!: Kid;
  tasks: Task[] = [];
  
  constructor(private taskService: TaskService) {
    this.getKid();
    this.getTasks();
  }

  getKid() {
    if (history.state && history.state.kid) {
      this.kid = history.state.kid;
      console.log(this.kid);
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
}
