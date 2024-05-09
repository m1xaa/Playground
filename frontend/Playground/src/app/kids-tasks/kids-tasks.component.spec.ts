import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsTasksComponent } from './kids-tasks.component';

describe('KidsTasksComponent', () => {
  let component: KidsTasksComponent;
  let fixture: ComponentFixture<KidsTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
