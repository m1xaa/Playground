import { Component, EventEmitter, Output } from '@angular/core';
import { CreateKidRequest } from '../../../../../models/kid/create-kid-request';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-kid-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-kid-modal.component.html',
  styleUrl: './create-kid-modal.component.css'
})
export class CreateKidModalComponent {

  createKidForm: FormGroup;
  @Output() create = new EventEmitter<CreateKidRequest>();
  @Output() cancel = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.createKidForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      age: ['', Validators.required],
      birthdate: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  createKid() {
    console.log(this.createKidForm.value)
    if (!this.createKidForm.valid) 
      return;
    
    const request: CreateKidRequest = {
      'name': this.createKidForm.value.name,
      'age': this.createKidForm.value.age,
      'description': this.createKidForm.value.description,
      'birthdate': this.createKidForm.value.birthdate,
      'image': this.createKidForm.value.image
    }
    console.log(2);
    this.create.emit(request);
  }

  closeModal() {
    this.cancel.emit();
  }
}
