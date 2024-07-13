import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKidModalComponent } from './create-kid-modal.component';

describe('CreateKidModalComponent', () => {
  let component: CreateKidModalComponent;
  let fixture: ComponentFixture<CreateKidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateKidModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateKidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
