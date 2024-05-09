import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentskidsComponent } from './parentskids.component';

describe('ParentskidsComponent', () => {
  let component: ParentskidsComponent;
  let fixture: ComponentFixture<ParentskidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentskidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentskidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
