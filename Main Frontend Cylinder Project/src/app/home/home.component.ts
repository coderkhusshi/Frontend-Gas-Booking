import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init();
    
  }

  gasbook($event:any){
   let loginStatus=sessionStorage.getItem("loggedIn");
   if(loginStatus==null){
    this.router.navigate(['/customer/login']);
   }
   else{
    sessionStorage.setItem("type",$event.target.value);
    this.router.navigate(['/gasbooking']);
   }
  }

}
