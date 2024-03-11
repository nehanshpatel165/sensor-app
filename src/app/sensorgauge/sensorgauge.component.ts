import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensorgauge',
  templateUrl: './sensorgauge.component.html',
  styleUrl: './sensorgauge.component.css'
})
export class SensorgaugeComponent implements OnInit {
  sensors: any[] = [];
  tempValue: number = 0;
  humValue: number = 0;
  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(data => {
      console.log(data.Data)
      this.sensors = data.Data;
      this.tempValue= this.sensors[0].temp;
      this.humValue= this.sensors[0].humidity;
    });
  }
}
