import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtdienthoaiComponent } from './ctdienthoai.component';

describe('CtdienthoaiComponent', () => {
  let component: CtdienthoaiComponent;
  let fixture: ComponentFixture<CtdienthoaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtdienthoaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtdienthoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
