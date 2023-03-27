import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-forgot-password',
  templateUrl: './customer-forgot-password.component.html',
  styleUrls: ['./customer-forgot-password.component.css']
})
export class CustomerForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup | any;
  public customer:[]|any;

  constructor(private fb: FormBuilder, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  Forgot(){
    let cust:Customer=this.forgotForm.value;
      this.customerService.updatePass(cust)
      .subscribe(data =>{
        alert("successfully login");
        window.location.href = "Customer/Login";},
      err => alert("Customer with this username and Email does not exist"));
        ;
      };  

}
