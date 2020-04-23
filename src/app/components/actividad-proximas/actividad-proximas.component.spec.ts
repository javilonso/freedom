import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadProximasComponent } from './actividad-proximas.component';

describe('ActividadProximasComponent', () => {
  let component: ActividadProximasComponent;
  let fixture: ComponentFixture<ActividadProximasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadProximasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadProximasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
