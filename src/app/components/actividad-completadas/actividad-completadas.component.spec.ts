import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadCompletadasComponent } from './actividad-completadas.component';

describe('ActividadCompletadasComponent', () => {
  let component: ActividadCompletadasComponent;
  let fixture: ComponentFixture<ActividadCompletadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadCompletadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadCompletadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
