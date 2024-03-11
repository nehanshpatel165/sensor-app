import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorgaugeComponent } from './sensorgauge.component';

describe('SensorgaugeComponent', () => {
  let component: SensorgaugeComponent;
  let fixture: ComponentFixture<SensorgaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SensorgaugeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SensorgaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
