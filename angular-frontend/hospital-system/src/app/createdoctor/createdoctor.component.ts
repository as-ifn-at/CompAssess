import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../model/Doctor';
import { HospitalserviceService } from '../service/hospitalservice.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  
  public doctor:Doctor = {} as Doctor;
  constructor(private service:HospitalserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  saveDoctor(){
    this.service.createDoctor(this.doctor).subscribe({
      next: (data)=>{
        alert("Doctor Successfully Added");
        this.router.navigate(['/']).then();
        
      },
      error: (e)=>{
        this.router.navigate(['/doctors/doctor/add']).then();
        alert("Error inserting data!! Try again");

      }
    })
  }

}
