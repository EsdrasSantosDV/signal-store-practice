import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldOfStudySignalsComponent } from './field-of-study-signals.component';

describe('FieldOfStudySignalsComponent', () => {
  let component: FieldOfStudySignalsComponent;
  let fixture: ComponentFixture<FieldOfStudySignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldOfStudySignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldOfStudySignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
