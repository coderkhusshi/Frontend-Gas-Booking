import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-update-profile',
  templateUrl: './customer-update-profile.component.html',
  styleUrls: ['./customer-update-profile.component.css']
})
export class CustomerUpdateProfileComponent implements OnInit {
  
  customerForm1: FormGroup | any;
  public customer:[]|any;
  customerId:any;
  constructor(private fb: FormBuilder, private customerService:CustomerService) { }

  ngOnInit() {
   
    this.customerId = sessionStorage.getItem("customerId");
    
    this.customerService.viewCustomer(this.customerId)
    .subscribe(data=>{
      this.customer=data;
    this.customerForm1 = this.fb.group({
      customerId: [this.customer?.customerId, Validators.required],
      username: [this.customer?.username, Validators.required],
      password1: [this.customer?.password,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
      address: [this.customer?.address, Validators.required],
      mobileNumber: [this.customer?.mobileNumber, [
        Validators.required,
        Validators.pattern("[6-9]{1}[0-9]{2}[0-9]{4}[0-9]{3}"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      email: [this.customer?.email, [
        Validators.required,
        Validators.email
      ]]
    })
  });
  }
  update(){
    let customerData:Customer=this.customerForm1.value;
    this.customerService.updateCustomer(customerData).subscribe(data => 
      alert("Customer  is Updated")
           );
    };
}
