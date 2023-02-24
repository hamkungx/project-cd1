import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLapComponent } from './panel-lap.component';

describe('PanelLapComponent', () => {
  let component: PanelLapComponent;
  let fixture: ComponentFixture<PanelLapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
