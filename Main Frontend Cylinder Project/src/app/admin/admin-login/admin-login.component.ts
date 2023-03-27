import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../../Models/Admin';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  LoginForm: FormGroup | any;
  public admin:[]|any;
  
  constructor(private fb: FormBuilder, private adminService:AdminService, private router:Router) { }
  
  ngOnInit(): void {

    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['',  [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]]
    });
  }

  adminLogin(){
    let loginData:Admin=this.LoginForm.value;
    
      this.adminService.validateAdmin(loginData)
      .subscribe(data =>{
        sessionStorage.setItem("loggedIn","adminlogin");
        sessionStorage.setItem("adminId",data.adminId.toString());
        this.router.navigate(['/home']);
        },
      err => alert("Admin with this username and password does not exist"));
        ;
      };  


}
