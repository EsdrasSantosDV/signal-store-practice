import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFormsDynamicComponent } from './generic-forms-dynamic.component';

describe('GenericFormsDynamicComponent', () => {
  let component: GenericFormsDynamicComponent;
  let fixture: ComponentFixture<GenericFormsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericFormsDynamicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericFormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
