import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericControlDynamicComponent } from './generic-control-dynamic.component';

describe('GenericControlDynamicComponent', () => {
  let component: GenericControlDynamicComponent;
  let fixture: ComponentFixture<GenericControlDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericControlDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericControlDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
