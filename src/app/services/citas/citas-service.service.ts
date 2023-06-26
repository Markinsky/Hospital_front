import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citas } from '../../shared/interfaces/citas';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http:HttpClient){ }

  public getCitas():Observable<Citas[]>{
    return this.http.get<Citas[]>(`${this.apiServerUrl}/citas/`);
  }
}
