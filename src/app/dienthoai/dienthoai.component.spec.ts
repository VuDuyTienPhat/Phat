import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienthoaiComponent } from './dienthoai.component';

describe('DienthoaiComponent', () => {
  let component: DienthoaiComponent;
  let fixture: ComponentFixture<DienthoaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienthoaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienthoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
