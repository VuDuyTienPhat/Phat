import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab3HomeComponent } from './lab3-home.component';

describe('Lab3HomeComponent', () => {
  let component: Lab3HomeComponent;
  let fixture: ComponentFixture<Lab3HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lab3HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
