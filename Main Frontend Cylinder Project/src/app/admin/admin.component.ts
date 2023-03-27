import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../Models/Admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup | any;
  public admin:[]|any;
  isUpdate:boolean=false;
  Id:number=1;

  constructor(private fb: FormBuilder, private adminService:AdminService) { }

  ngOnInit() {
    
  }
}