// src/app/sensor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private baseUrl = 'http://localhost:3000/sensors';
  // private baseUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  getSensors(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
