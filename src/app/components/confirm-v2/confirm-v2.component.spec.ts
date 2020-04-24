import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmV2Component } from './confirm-v2.component';

describe('ConfirmV2Component', () => {
  let component: ConfirmV2Component;
  let fixture: ComponentFixture<ConfirmV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
