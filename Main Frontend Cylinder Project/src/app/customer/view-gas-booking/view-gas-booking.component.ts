import { Component, OnInit } from '@angular/core';
import { GasBooking } from 'src/app/Models/GasBooking';
import { AdminService } from 'src/app/services/admin.service';
import { GasBookingService } from 'src/app/services/gas-booking.service';

@Component({
  selector: 'app-view-gas-booking',
  templateUrl: './view-gas-booking.component.html',
  styleUrls: ['./view-gas-booking.component.css']
})
export class ViewGasBookingComponent implements OnInit {


  gasBooking: GasBooking[] | any;
  customerId: number | any;
  constructor(private gasBookService: AdminService) { }

  ngOnInit() {
    this.customerId = sessionStorage.getItem("customerId");
    this.gasBookService.getAllBookings(this.customerId)
      .subscribe(data => {
        this.gasBooking = data;
        if(this.gasBooking.length == 0){
          alert("No Bookings");
        }
      },
        err => alert(err));
  }
}

