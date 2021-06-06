import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YttcDetail1Component } from './yttc-detail1.component';

describe('YttcDetail1Component', () => {
  let component: YttcDetail1Component;
  let fixture: ComponentFixture<YttcDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YttcDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YttcDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
