import { Injectable } from '@angular/core';
import {Task} from './objects/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [new Task("Lale", "Posao ti je da uberes lale"),
      new Task("Ljubicice", "Posao ti je d a uberes ljubicice"),
      new Task("bicikl", "nauci da vozis bicikl")
    ];
   }
}
