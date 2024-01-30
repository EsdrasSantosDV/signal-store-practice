import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDefaultComponent } from './home-default.component';

describe('HomeDefaultComponent', () => {
  let component: HomeDefaultComponent;
  let fixture: ComponentFixture<HomeDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
