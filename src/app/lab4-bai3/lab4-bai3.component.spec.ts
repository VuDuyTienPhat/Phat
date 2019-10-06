import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4Bai3Component } from './lab4-bai3.component';

describe('Lab4Bai3Component', () => {
  let component: Lab4Bai3Component;
  let fixture: ComponentFixture<Lab4Bai3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Bai3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4Bai3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
