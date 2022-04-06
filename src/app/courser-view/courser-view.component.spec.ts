import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserViewComponent } from './courser-view.component';

describe('CourserViewComponent', () => {
  let component: CourserViewComponent;
  let fixture: ComponentFixture<CourserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourserViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
