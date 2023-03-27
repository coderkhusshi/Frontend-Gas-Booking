import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Admin } from 'src/app/Models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm: FormGroup | any;
  public admin:[]|any;
  
  constructor(private fb: FormBuilder, private adminService:AdminService) { }
  
  ngOnInit(): void {

    this.forgotForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]]
    });
  }

  Forgot(){
    let loginData:Admin=this.forgotForm.value;
    
      this.adminService.updatePass(loginData)
      .subscribe(data =>{
        alert("successfully changed");
        window.location.href = "Admin/Login";},
      err => alert("Admin with this username and Email does not exist"));
        ;
      };  

}
