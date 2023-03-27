import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GasBooking } from '../Models/GasBooking';

@Injectable({
  providedIn: 'root'
})
export class GasBookingService {

  constructor(private http:HttpClient) { }
  
  insertGasBooking(gb:GasBooking):Observable<GasBooking>{
 
    return this.http.post<GasBooking>("http://localhost:8081/gasBooking/GasBooking", gb);
  }
  
  showGasBooking():Observable<GasBooking[]>{
    
    return this.http.get<GasBooking[]>("http://localhost:8081/gasBooking/GasBooking/show");
  }

  getBill(custId:number):Observable<GasBooking>{
      return this.http.get<GasBooking>(`/http://localhost:8081/gasBooking/GasBooking/${custId}`);

  }

  deleteGasBooking(gbId:number):Observable<GasBooking>{
    return this.http.delete<GasBooking>(`http://localhost:8081/gasBooking/GasBooking/${gbId}`);

  }
  updateGasBooking(gb:GasBooking):Observable<GasBooking>{
    return this.http.put<GasBooking>("http://localhost:8081/gasBooking/GasBooking",gb);
  }

}