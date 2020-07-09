import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogchartComponent } from './logchart.component';

describe('LogchartComponent', () => {
  let component: LogchartComponent;
  let fixture: ComponentFixture<LogchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
