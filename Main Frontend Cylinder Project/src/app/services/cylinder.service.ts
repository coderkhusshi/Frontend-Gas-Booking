import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cylinder } from '../Models/Cylinder';

@Injectable({
  providedIn: 'root'
})
export class CylinderService {

  constructor(private http:HttpClient) { }
  //creating Employee
  insertCylinder(cyl:Cylinder):Observable<Cylinder>{
 
    return this.http.post<Cylinder>("http://localhost:8081/gasBooking/Cylinder", cyl);
  }
  
  showCylinder():Observable<Cylinder[]>{
    // the result of get function. get fun will give you Observable<Employee[]>
    return this.http.get<Cylinder[]>("http://localhost:8081/gasBooking/Cylinder/show");
  }

  viewCylindersByType(cylinderType:String):Observable<Cylinder>{
      return this.http.get<Cylinder>(`http://localhost:8081/gasBooking/Cylinder${cylinderType}`);
  }

  deleteCylinder(cylinderId:number):Observable<Cylinder>{
    return this.http.delete<Cylinder>(`http://localhost:8081/gasBooking/Cylinder/${cylinderId}`);

  }

  updateCylinder(cyl:Cylinder):Observable<Cylinder>{
    return this.http.put<Cylinder>("http://localhost:8081/gasBooking/Cylinder",cyl);
  }

}
