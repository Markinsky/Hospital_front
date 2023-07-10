import { Component } from '@angular/core';
import { Doctor } from '../shared/interfaces/doctor';
import { DoctorService } from '../services/doctores/doctor.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm }   from '@angular/forms';
import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  doctores = [] as Array<Doctor>
  edDoctor: Doctor | null = null;

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

  public addDoctor(newDoctor:NgForm):void{
    this.doctorService.postDoctores(newDoctor.value).subscribe(
      (response:Doctor) =>{
        console.log(response);
        this.getAllDoctores();
      },(error: HttpErrorResponse) =>{
        alert(error.message)
      });
  }

  public updateDoctores(doctor:Doctor){
    console.log("Entra el botón");
    this.doctorService.updateDoctores(doctor).subscribe(
      (response:Doctor) =>{
        console.log(response);
        this.getAllDoctores();
      },(error: HttpErrorResponse) =>{
        alert(error.message)
      });
  }

  public openModal(doctor:Doctor | null, mode:String):void{
    const modalOptions: ModalOptions = {
      placement: 'center'
  }
  let $modalElement: HTMLElement | null = null;
    if(mode === 'add'){
      $modalElement = document.querySelector('#addModal') as HTMLElement;
    }
    if(mode === 'update'){
      this.edDoctor = doctor;
      $modalElement = document.querySelector('#putModal') as HTMLElement;
    }
    const modal: ModalInterface = new Modal($modalElement, modalOptions);
    
    modal.show();
  }

  public closeModal(modal:String):void{
    const myModal = document.getElementById(`${modal}`) as HTMLElement;
       myModal.classList.add('hidden');
       const modalBackdrop = document.querySelector('div[modal-backdrop]');
       if (modalBackdrop) {
        modalBackdrop.remove();
      }
  }
}
