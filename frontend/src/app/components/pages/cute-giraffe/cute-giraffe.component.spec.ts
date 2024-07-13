import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuteGiraffeComponent } from './cute-giraffe.component';

describe('CuteGiraffeComponent', () => {
  let component: CuteGiraffeComponent;
  let fixture: ComponentFixture<CuteGiraffeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuteGiraffeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuteGiraffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
