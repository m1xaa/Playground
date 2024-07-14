import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteKidModalComponent } from './delete-kid-modal.component';

describe('DeleteKidModalComponent', () => {
  let component: DeleteKidModalComponent;
  let fixture: ComponentFixture<DeleteKidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteKidModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteKidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
