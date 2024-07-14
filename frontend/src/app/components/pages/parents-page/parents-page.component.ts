import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CreateKidModalComponent } from './ui/create-kid-modal/create-kid-modal.component';
import { DeleteKidModalComponent } from './ui/delete-kid-modal/delete-kid-modal.component';
import { KidsDisplayComponent } from './ui/kids-display/kids-display.component';
import { UpdateKidModalComponent } from './ui/update-kid-modal/update-kid-modal.component';
import { Kid } from '../../../models/as-is/kid';
import { KidService } from '../../../service/kid.service';
import { User } from '../../../models/as-is/user';
import { CreateKidRequest } from '../../../models/kid/create-kid-request';
import { UpdateKidRequest } from '../../../models/kid/update-kid-request';

@Component({
  selector: 'app-parents-page',
  standalone: true,
  imports: [
    CommonModule,
    CreateKidModalComponent,
    UpdateKidModalComponent,
    DeleteKidModalComponent,
    KidsDisplayComponent,
    AsyncPipe
  ],
  templateUrl: './parents-page.component.html',
  styleUrl: './parents-page.component.css'
})
export class ParentsPageComponent {

  showCreateModal = false;
  showDeleteModal = false;
  showUpdateModal = false;
  kids: Kid[] = [];
  selectedKid!: Kid;

  constructor(private kidService: KidService) {
    this.kidService.getAll(this.getCurrentParentId()).subscribe((response) => {
      if (response) {
        this.kids = response;
      }
    });
  }

  getCurrentParentId() {
    var user: User = JSON.parse(localStorage.getItem('currentUser')!);
    return user.id;
  }

  onUpdateClick(kid: Kid) {
    this.selectedKid = kid;
    this.showUpdateModal = true;
  }

  onDeleteClick(kid: Kid) {
    this.selectedKid = kid;
    this.showDeleteModal = true;
    console.log(this.selectedKid);
  }

  onCreateClick() {
    this.showCreateModal = true;
  }

  onCreate(createKidRequest: CreateKidRequest) {
    this.kidService.create(this.getCurrentParentId(), createKidRequest).subscribe(kid => {
      if (kid) {
        this.kids = [...this.kids, kid];
      }
    });
    this.showCreateModal = false;
  }

  onCancelCreate() {
    this.showCreateModal = false;
  }

  onDelete() {
    this.kidService.delete(this.getCurrentParentId(), this.selectedKid.id).subscribe((response) => {
      const index = this.kids.findIndex(k => k.id === this.selectedKid.id);
      this.kids.splice(index, 1);
    });
    this.showDeleteModal = false
  }

  onCancelDelete() {
    this.showDeleteModal=false
  }

  onCancelUpdate() {
    this.showUpdateModal = false;
  }

  onUpdate(updateKidRequest: UpdateKidRequest) {
    this.kidService.update(this.getCurrentParentId(), updateKidRequest, this.selectedKid.id).subscribe((response) => {
      if (response) {
        const index = this.kids.findIndex(k => k.id === this.selectedKid.id);
        this.kids[index] = response;
      }
    });
    this.showUpdateModal = false;
  }
}
