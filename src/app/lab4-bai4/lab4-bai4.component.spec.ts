import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4Bai4Component } from './lab4-bai4.component';

describe('Lab4Bai4Component', () => {
  let component: Lab4Bai4Component;
  let fixture: ComponentFixture<Lab4Bai4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Bai4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4Bai4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
