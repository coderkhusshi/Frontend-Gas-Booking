import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../Models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
   addBank(bank:Bank):Observable<Bank>{
 
    return this.http.post<Bank>("http://localhost:8081/gasBooking/Bank", bank);
  }
  
  getAllBank():Observable<Bank[]>{
    // the result of get function. get fun will give you Observable<Bank[]>
    return this.http.get<Bank[]>("http://localhost:8081/gasBooking/Bank/show");
  }

  getBankByID(bankId:number):Observable<Bank>{
      return this.http.get<Bank>(`http://localhost:8081/gasBooking/Bank/${bankId}`);

  }

  deleteBank(bankId:number):Observable<Bank>{
    return this.http.delete<Bank>(`http://localhost:8081/gasBooking/Bank/${bankId}`);

  }

  updateBank(bank:Bank):Observable<Bank>{
    return this.http.put<Bank>("http://localhost:8081/gasBooking/Bank",bank);
  }

}