import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citas } from './citas';

@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {

  private apiServerUrl = "";
  constructor(private http:HttpClient){ }

  public getCitas():Observable<Citas[]>{
    return this.http.get<Citas[]>(`${this.apiServerUrl}/citas/`);
  }
}
