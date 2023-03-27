import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-my-activity',
  templateUrl: './customer-my-activity.component.html',
  styleUrls: ['./customer-my-activity.component.css']
})
export class CustomerMyActivityComponent implements OnInit {

  activity = " 'Profile' ";

  public name: any;
  public email: any;
  customerId: any;
  public customer: [] | any;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerId = sessionStorage.getItem("customerId");
    this.customerService.viewCustomer(this.customerId)
      .subscribe(data => {
        this.customer = data;
        this.name = this.customer.username;
        this.email = this.customer.email;
      });
  }
  Activity(event: any) {
    event.preventDefault();
    this.activity = event.target.value;
  }

}

