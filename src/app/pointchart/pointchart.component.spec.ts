import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointchartComponent } from './pointchart.component';

describe('PointchartComponent', () => {
  let component: PointchartComponent;
  let fixture: ComponentFixture<PointchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
