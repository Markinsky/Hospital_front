import { Component } from '@angular/core';
import { Citas } from './shared/interfaces/citas';
import { CitasServiceService } from './services/citas/citas-service.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listacitas: Citas[] = [];

  constructor(private citasservice:CitasServiceService){ }

  ngOnInit(){
    this.getCita();
  }

  public getCita(){
    this.citasservice.getCitas().subscribe(
      (response: Citas[]) => {
        this.listacitas = response;
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }
}
