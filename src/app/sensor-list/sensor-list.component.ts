// src/app/sensor-list/sensor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SensorService } from '../sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors: any[] = [];

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(data => {
      console.log(data.Data)
      this.sensors = data.Data;
    });
  }
}
