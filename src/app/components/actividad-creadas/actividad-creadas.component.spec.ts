import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCreadasComponent } from './actividad-creadas.component';

describe('ActividadCreadasComponent', () => {
  let component: ActividadCreadasComponent;
  let fixture: ComponentFixture<ActividadCreadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadCreadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCreadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
