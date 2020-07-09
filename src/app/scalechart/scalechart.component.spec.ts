import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalechartComponent } from './scalechart.component';

describe('ScalechartComponent', () => {
  let component: ScalechartComponent;
  let fixture: ComponentFixture<ScalechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
