import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurrenderCylinder } from '../Models/surrenderCylinder';

@Injectable({
  providedIn: 'root'
})
export class SurrenderCylinderService {
  constructor(private http:HttpClient) { 
  }
  //creating Employee
  insertSurrenderCylinder(cyl:SurrenderCylinder):Observable<SurrenderCylinder>{
    return this.http.post<SurrenderCylinder>("http://localhost:8081/gasBooking/SurrenderCylinder",cyl);
  }
  
  showSurrenderCylinder():Observable<SurrenderCylinder[]>{
    // the result of get function. get fun will give you Observable<Employee[]>
    return this.http.get<SurrenderCylinder[]>("http://localhost:8081/gasBooking/SurrenderCylinder/show");
  }

  //getCylinderByID(cylinderId:number):Observable<Cylinder>{
      //return this.http.get<Cylinder>(`http://localhost:8081/gasBooking/Cylinder${cylinderId}`);

  //}

  deleteSurrenderCylinder(surrenderId:number):Observable<SurrenderCylinder>{
    return this.http.delete<SurrenderCylinder>(`http://localhost:8081/gasBooking/SurrenderCylinder/${surrenderId}`);

  }

  updateSurrenderCylinder(cyl:SurrenderCylinder):Observable<SurrenderCylinder>{
    return this.http.put<SurrenderCylinder>("http://localhost:8081/gasBooking/SurrenderCylinder",cyl);
  }

}