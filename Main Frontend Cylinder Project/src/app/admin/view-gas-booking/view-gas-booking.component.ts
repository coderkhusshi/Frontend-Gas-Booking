import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GasBooking } from 'src/app/Models/GasBooking';
import { AdminService } from 'src/app/services/admin.service';
import { GasBookingService } from 'src/app/services/gas-booking.service';

@Component({
  selector: 'app-view-gas-booking',
  templateUrl: './view-gas-booking.component.html',
  styleUrls: ['./view-gas-booking.component.css']
})
export class ViewGasBookingComponent implements OnInit {

  bookingForm: FormGroup | any;
  gasBooking: GasBooking[] | any;
  customerId: number | any;
  constructor(private fb: FormBuilder,private gasBookService: AdminService,private gasService:GasBookingService) { }

  todaysDate = new Date();
  day = this.todaysDate.getDate();
  month = this.todaysDate.getMonth() + 1;
  year = this.todaysDate.getFullYear();
  currentDate: string = `${this.year}-${this.month}-${this.day}`;
  
  ngOnInit() {
    
    this.bookingForm = this.fb.group({
      customerId: [''],
      fromDate: [''],
      toDate: ['']
    });


    this.gasService.showGasBooking().subscribe(data=>this.gasBooking=data);

  }

  View(){
    let gb: any = this.bookingForm.value;
    this.gasBookService.getAllBookingsForDays(gb.customerId,gb.fromDate,gb.toDate)
    .subscribe(data=>this.gasBooking=data);

  }
}