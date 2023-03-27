import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  loginForm: FormGroup|any;
  customers: Customer[]|any;

  constructor(private fb: FormBuilder,private service: CustomerService,private router:Router) { }

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
    });
  }
  validateCustomer(){
    let cust:Customer=this.loginForm.value;
    this.service.validateCustomer(cust)
    .subscribe(data => {
        sessionStorage.setItem("loggedIn","customerlogin");
        sessionStorage.setItem("customerId",data.customerId.toString());
        this.router.navigate(['/home']);
      },
      err => alert("Customer with this username and password does not exist")); 
      };
}

