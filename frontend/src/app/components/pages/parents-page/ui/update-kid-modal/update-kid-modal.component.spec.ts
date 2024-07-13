import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKidModalComponent } from './update-kid-modal.component';

describe('UpdateKidModalComponent', () => {
  let component: UpdateKidModalComponent;
  let fixture: ComponentFixture<UpdateKidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateKidModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateKidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
