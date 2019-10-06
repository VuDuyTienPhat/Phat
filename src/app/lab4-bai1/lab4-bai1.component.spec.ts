import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab4Bai1Component } from './lab4-bai1.component';

describe('Lab4Bai1Component', () => {
  let component: Lab4Bai1Component;
  let fixture: ComponentFixture<Lab4Bai1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab4Bai1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab4Bai1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
