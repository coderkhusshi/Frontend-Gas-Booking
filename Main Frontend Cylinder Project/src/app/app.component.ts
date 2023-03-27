import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineEGasBooking';

  loginStatus=sessionStorage.getItem("loggedIn");
  constructor(private router:Router){}

  loggedOut(){
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("customerId");
    sessionStorage.removeItem("adminId");
    this.router.navigate(['/home']);

}

}

