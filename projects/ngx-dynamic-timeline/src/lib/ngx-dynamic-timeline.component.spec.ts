import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicTimelineComponent } from './ngx-dynamic-timeline.component';

describe('NgxDynamicTimelineComponent', () => {
  let component: NgxDynamicTimelineComponent;
  let fixture: ComponentFixture<NgxDynamicTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDynamicTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
