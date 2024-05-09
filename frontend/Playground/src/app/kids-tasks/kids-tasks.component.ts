import { Component } from '@angular/core';
import { Kid } from '../objects/kid';
import { CommonModule } from '@angular/common';
import { Task } from '../objects/task';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kids-tasks.component.html',
  styleUrl: './kids-tasks.component.css'
})
export class KidsTasksComponent {

  kid!: Kid;
  tasks: Task[];

  constructor(private router: Router, private taskService: TaskService) {
    const routerExtras = this.router.getCurrentNavigation()?.extras.state;

    if (routerExtras && routerExtras["kid"]) {
      this.kid = JSON.parse(routerExtras["kid"]);
      console.log(this.kid);
    } else {
      //this.router.navigate(['/error']);
    }
    console.log(this.kid);

    this.tasks = taskService.getTasks();
  }
}
