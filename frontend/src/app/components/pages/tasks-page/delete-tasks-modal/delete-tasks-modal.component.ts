import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kid } from '../../../../models/as-is/kid';
import { Task } from '../../../../models/as-is/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-tasks-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './delete-tasks-modal.component.html',
  styleUrl: './delete-tasks-modal.component.css'
})
export class DeleteTasksModalComponent {

  @Input() task!: Task;
  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  cancelClick() {
    this.cancel.emit();
  }

  deleteClick() {
    this.delete.emit();
  }

}
