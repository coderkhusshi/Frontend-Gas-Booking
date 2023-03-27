import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { profile } from 'console';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.component.html',
  styleUrls: ['./my-activity.component.css']
})
export class MyActivityComponent implements OnInit {

  activity = " 'Profile' ";

  public name: any;
  public email: any;
  adminId: any;
  public admin: [] | any;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminId = sessionStorage.getItem("adminId");
    this.adminService.viewAdmin(this.adminId)
      .subscribe(data => {
        this.admin = data;
        this.name = this.admin.username;
        this.email = this.admin.email;
      });
      
  }
  Activity(event: any) {
    event.preventDefault();
    this.activity = event.target.value;
  }
}
