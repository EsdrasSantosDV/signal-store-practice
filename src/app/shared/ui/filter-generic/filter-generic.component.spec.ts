import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGenericComponent } from './filter-generic.component';

describe('FilterGenericComponent', () => {
  let component: FilterGenericComponent;
  let fixture: ComponentFixture<FilterGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterGenericComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
