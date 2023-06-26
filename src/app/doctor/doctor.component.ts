import { Component } from '@angular/core';
import { Doctor } from '../shared/interfaces/doctor';
import { DoctorService } from '../services/doctores/doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctores: Doctor[] = [];

  constructor(private doctorService: DoctorService){}
  ngOnInit(){
    this.getAllDoctores();
  }
  public getAllDoctores(){
    this.doctorService.getDoctores().subscribe(
      (response: Doctor[]) => {
        this.doctores = response;
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }
}
