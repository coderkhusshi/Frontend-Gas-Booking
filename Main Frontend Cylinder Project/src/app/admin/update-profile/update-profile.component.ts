import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractUser } from 'src/app/Models/abstractUser';
import { Admin } from 'src/app/Models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  adminForm: FormGroup | any;
  public admin:[]|any;
  adminId:any;

  constructor(private fb: FormBuilder, private adminService:AdminService) { }

  ngOnInit() {

    this.adminId = sessionStorage.getItem("adminId");
    
    this.adminService.viewAdmin(this.adminId)
    .subscribe(data=>{
      this.admin=data;
    this.adminForm = this.fb.group({
      adminId: [this.admin?.adminId, Validators.required],
      username: [this.admin?.username, Validators.required],
      password: [this.admin?.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
      address: [this.admin?.address, Validators.required],
      mobileNumber: [this.admin?.mobileNumber,[
        Validators.required,
        Validators.pattern("[6-9]{1}[0-9]{2}[0-9]{4}[0-9]{3}"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      email: [this.admin?.email, [
        Validators.required,
        Validators.email
      ]]
    })
  });
  }
  
  update(){
    let adminData:Admin=this.adminForm.value;
    this.adminService.updateAdmin(adminData).subscribe(data => 
      alert("Admin  is Updated")
           );
    };
  }

