import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'http://127.0.0.1:8000/devices/';

  constructor(private http: HttpClient) { }
 
  createDevice(deviceInfo: any): Observable<any> {
     return this.http.post(this.apiUrl, deviceInfo);
  }
 
  getDevice(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
 
  getDeviceById(id: string): Observable<any> {
   // return this.http.get(`http://127.0.0.1:8000/api/location/${id}/`);
   return this.http.get(`http://127.0.0.1:8000/devices/${id}/`);
 
 }
 
  updateDevice(deviceInfo: any): Observable<any> {
   // return this.http.put(`http://127.0.0.1:8000/api/location/${locationInfo.id}/`, locationInfo);
   return this.http.put(`http://127.0.0.1:8000/devices/${deviceInfo.id}/`, deviceInfo);
 }
 
  deleteDevice(id: string): Observable<any> {
   // return this.http.delete(`http://127.0.0.1:8000/api/location/${id}`);
   return this.http.delete(`http://127.0.0.1:8000/devices/${id}`);
 }
}
