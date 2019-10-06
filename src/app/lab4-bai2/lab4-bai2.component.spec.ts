import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4Bai2Component } from './lab4-bai2.component';

describe('Lab4Bai2Component', () => {
  let component: Lab4Bai2Component;
  let fixture: ComponentFixture<Lab4Bai2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Bai2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4Bai2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
