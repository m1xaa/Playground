import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateKidRequest } from '../../../../../models/kid/update-kid-request';
import { Kid } from '../../../../../models/as-is/kid';

@Component({
  selector: 'app-update-kid-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-kid-modal.component.html',
  styleUrl: './update-kid-modal.component.css'
})
export class UpdateKidModalComponent {
  updateKidForm: FormGroup;
  @Input() kid!: Kid;
  @Output() update = new EventEmitter<UpdateKidRequest>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.updateKidForm = this.fb.group({
      name: [this.kid?.name, Validators.required],
      description: [this.kid?.description, Validators.required],
      age: [this.kid?.age, Validators.required],
      birthdate: [this.kid?.birthdate, Validators.required],
      image: [this.kid?.image, Validators.required],
    });
  }

  ngOnChanges() {
    this.updateKidForm.patchValue({
      name: this.kid.name,
      description: this.kid.description,
      age: this.kid.age,
      birthdate: this.kid.birthdate,
      image: this.kid.image
    })
  }

  updateKid() {
    if (!this.updateKidForm.valid) 
      return;
    
    const request: UpdateKidRequest = {
      'name': this.updateKidForm.value.name,
      'age': this.updateKidForm.value.age,
      'description': this.updateKidForm.value.description,
      'birthdate': this.updateKidForm.value.birthdate,
      'image': this.updateKidForm.value.image
    }
    this.update.emit(request);
  }

  closeModal() {
    this.cancel.emit();
  }
}
