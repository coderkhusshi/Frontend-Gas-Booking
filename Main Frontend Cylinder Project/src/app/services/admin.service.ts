import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/Admin';
import { GasBooking } from '../Models/GasBooking';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  showAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>("http://localhost:8081/gasBooking/Admin/show");
  }

  insertAdmin(adminData:Admin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8081/gasBooking/Admin",adminData);
  }

  updateAdmin(updatedData:Admin):Observable<Admin>{
    return this.http.put<Admin>("http://localhost:8081/gasBooking/Admin",updatedData);
  }

  deleteAdmin(adminId:number):Observable<Admin>{
    return this.http.delete<Admin>(`http://localhost:8081/gasBooking/Admin/${adminId}`);
  }

  findadminId():Observable<number>{
    return this.http.get<number>("http://localhost:8081/gasBooking/Admin/ID");
  }
 
  validateAdmin(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8081/gasBooking/Admin/login",admin);
  }

  updatePass(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8081/gasBooking/Admin/pass",admin);
  }

  viewAdmin(adminId:number):Observable<Admin>{
    return this.http.get<Admin>(`http://localhost:8081/gasBooking/Admin/${adminId}`);
  }

  getAllBookings(custId:number):Observable<GasBooking>{
    return this.http.get<GasBooking>(`http://localhost:8081/gasBooking/Admin/bookings/${custId}`);
  }
  
  getAllBookingsForDays(custId:number,fromDate:Date,toDate:Date):Observable<GasBooking>{
    return this.http.get<GasBooking>(`http://localhost:8081/gasBooking/Admin/${custId}/${fromDate}/${toDate}`);
  }
}