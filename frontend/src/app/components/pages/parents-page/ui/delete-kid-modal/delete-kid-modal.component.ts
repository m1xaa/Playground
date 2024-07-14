import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kid } from '../../../../../models/as-is/kid';

@Component({
  selector: 'app-delete-kid-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-kid-modal.component.html',
  styleUrl: './delete-kid-modal.component.css'
})
export class DeleteKidModalComponent {

  @Input() kid!: Kid;
  @Output() delete = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
