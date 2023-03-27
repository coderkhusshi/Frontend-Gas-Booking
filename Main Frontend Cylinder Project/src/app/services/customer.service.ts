import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  //creating Customer
  insertCustomer(cust:Customer):Observable<Customer>{
 
    return this.http.post<Customer>("http://localhost:8081/gasBooking/Customer", cust);
  }
  
  viewCustomers():Observable<Customer[]>{
    // the result of get function. get fun will give you Observable<Customer[]>
    return this.http.get<Customer[]>("http://localhost:8081/gasBooking/Customer");
  }

  viewCustomer(custId:any):Observable<Customer>{
      return this.http.get<Customer>(`http://localhost:8081/gasBooking/Customer/${custId}`);
  }
  deleteCustomer(custId:number):Observable<Customer>{
    return this.http.delete<Customer>(`http://localhost:8081/gasBooking/Customer/${custId}`);

  }
  updateCustomer(cust:Customer):Observable<Customer>{
    return this.http.put<Customer>("http://localhost:8081/gasBooking/Customer",cust);
  }
  validateCustomer(cust:Customer):Observable<Customer>{
    return this.http.post<Customer>("http://localhost:8081/gasBooking/Customer/custId",cust);
  }

  updatePass(cust:Customer):Observable<Customer>{
    return this.http.put<Customer>("http://localhost:8081/gasBooking/Customer/pass",cust);
  }
}
