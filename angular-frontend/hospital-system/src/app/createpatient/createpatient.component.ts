import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../model/Doctor';
import { Patient } from '../model/Patient';
import { HospitalserviceService } from '../service/hospitalservice.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {

  public patient:Patient ={} as Patient;
  public doctors:Doctor[] = {} as Doctor[];
  public errorMessage:string | null = null;

  constructor(private service:HospitalserviceService , private router:Router) { }

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe({
      next:(data) =>{
        this.doctors = data;
      }
    })
  }
  savePatient(){
    this.service.CreatePatient(this.patient).subscribe({
      next:(data)=>{
        alert("Patient Successfully Added!!")
        this.router.navigate(['/']).then();
      },
      error:(e)=>{
        this.errorMessage = e;
        console.error(e);
        alert("Invalid Information")
        this.router.navigate(['/patients/patient/add']).then();
      }
    });
  }
}
