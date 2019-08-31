import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienImageComponent } from './hien-image.component';

describe('HienImageComponent', () => {
  let component: HienImageComponent;
  let fixture: ComponentFixture<HienImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
