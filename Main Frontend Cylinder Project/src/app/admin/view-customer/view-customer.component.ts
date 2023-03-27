import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  public customers:[]|any;
  constructor(private custService:CustomerService) { }

  ngOnInit(): void {
    this.custService.viewCustomers()
        .subscribe(data =>{this.customers=data;},
        err => console.log(err));
  }

deleteCustomer(customerId:number) {
  let candelete = confirm(`Are you Sure to Delete Customer '${customerId}'`);
  if (candelete == true) {
    this.custService.deleteCustomer(customerId).subscribe(data => {
      alert("Deleted Scuccessfully");
      this.custService.viewCustomers().subscribe(custs => {
        this.customers = custs;
      });
    });
  }
}

}