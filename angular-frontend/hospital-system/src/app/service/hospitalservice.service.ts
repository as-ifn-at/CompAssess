import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Doctor } from '../model/Doctor';
import { Patient } from '../model/Patient';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  private serverUrl:string = `http://localhost:9091`;  
  constructor(private httpClient:HttpClient) { }

   
   public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ``;
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Error : ${error.error.message}`;
    }
    else {
      
      errorMessage = `status : ${error.status}`;
    }
    return throwError(() => errorMessage);
  }

  
  public getAllDoctors():Observable<Doctor[]>{
    let dataUrl:string = `http://localhost:9091/doctors`;
    return this.httpClient.get<Doctor[]>(dataUrl).pipe(catchError(this.handleError));
  }
   
   public getDoctor(name:string):Observable<Doctor>{
     
    let dataUrl:string = `${this.serverUrl}/doctors/doctor/${name}`;
    return this.httpClient.get<Doctor>(dataUrl).pipe(catchError(this.handleError));
  }
 
  public createDoctor(doctor: Doctor): Observable<Doctor> {
    let dataUrl: string = `${this.serverUrl}/doctors/doctor`;
    return this.httpClient.post<Doctor>(dataUrl, doctor).pipe(catchError(this.handleError));
  }
   
   public getPatient(patient_id:number):Observable<Doctor>{
    let dataUrl:string = `${this.serverUrl}/patients/patient/${patient_id}`;
    return this.httpClient.get<Doctor>(dataUrl).pipe(catchError(this.handleError));
  }
 
  public CreatePatient(patient:Patient): Observable<Patient> {
    let dataUrl: string = `${this.serverUrl}/patients/patient`;
    return this.httpClient.post<Patient>(dataUrl, patient).pipe(catchError(this.handleError));
  }

}
