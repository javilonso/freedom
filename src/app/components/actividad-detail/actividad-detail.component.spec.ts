import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadDetailComponent } from './actividad-detail.component';

describe('ActividadDetailComponent', () => {
  let component: ActividadDetailComponent;
  let fixture: ComponentFixture<ActividadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
