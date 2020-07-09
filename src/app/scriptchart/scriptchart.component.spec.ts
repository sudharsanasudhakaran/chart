import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptchartComponent } from './scriptchart.component';

describe('ScriptchartComponent', () => {
  let component: ScriptchartComponent;
  let fixture: ComponentFixture<ScriptchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
