import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolchartComponent } from './toolchart.component';

describe('ToolchartComponent', () => {
  let component: ToolchartComponent;
  let fixture: ComponentFixture<ToolchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
