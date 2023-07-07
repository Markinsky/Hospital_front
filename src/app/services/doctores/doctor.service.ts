import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/shared/interfaces/doctor';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiServerUrl = environment.apiBaseUrl;
  
  constructor(private http:HttpClient) { }

  public getDoctores():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctor/`);
  }

  public postDoctores(doctor: Doctor): Observable<Doctor>{
    return this.http.post<Doctor>(`${this.apiServerUrl}/doctor/`, doctor);
  }

  public updateDoctores(doctor: Doctor): Observable<Doctor>{
    return this.http.put<Doctor>(`${this.apiServerUrl}/employee/update`, doctor);
  }
}
