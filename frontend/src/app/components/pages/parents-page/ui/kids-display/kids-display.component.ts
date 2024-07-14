import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kid } from '../../../../../models/as-is/kid';
import { UpdateKidRequest } from '../../../../../models/kid/update-kid-request';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-kids-display',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule
  ],
  templateUrl: './kids-display.component.html',
  styleUrl: './kids-display.component.css'
})
export class KidsDisplayComponent {

  @Input() kids!: Kid[];
  @Output() update = new EventEmitter<Kid>();
  @Output() delete = new EventEmitter<Kid>();
  @Output() create = new EventEmitter<void>();

  onUpdate(kid: Kid) {
    this.update.emit(kid);
  }

  onDelete(kid: Kid) {
    this.delete.emit(kid);
  }

  onCreate() {
    this.create.emit();
  }
}
