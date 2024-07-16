import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTasksModalComponent } from './delete-tasks-modal.component';

describe('DeleteTasksModalComponent', () => {
  let component: DeleteTasksModalComponent;
  let fixture: ComponentFixture<DeleteTasksModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTasksModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteTasksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
