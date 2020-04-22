import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaActividadComponent } from './caja-actividad.component';

describe('CajaActividadComponent', () => {
  let component: CajaActividadComponent;
  let fixture: ComponentFixture<CajaActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
