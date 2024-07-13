import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsDisplayComponent } from './kids-display.component';

describe('KidsDisplayComponent', () => {
  let component: KidsDisplayComponent;
  let fixture: ComponentFixture<KidsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
