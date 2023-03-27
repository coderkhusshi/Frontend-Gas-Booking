import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Models/Customer';
import { Cylinder } from '../Models/Cylinder';
import { GasBooking } from '../Models/GasBooking';
import { SurrenderCylinder } from '../Models/surrenderCylinder';
import { CustomerService } from '../services/customer.service';
import { GasBookingService } from '../services/gas-booking.service';
import { SurrenderCylinderService } from '../services/surrender-cylinder.service';

@Component({
  selector: 'app-gas-booking',
  templateUrl: './gas-booking.component.html',
  styleUrls: ['./gas-booking.component.css']
})
export class GasBookingComponent implements OnInit {

  gasbookingForm: FormGroup | any;
  gasbookings: GasBooking[] | any;
  isUpdate: boolean = false;
  customer: Customer | any;
  gasBookingId: number | any;
  surrenderId: number | any;
  cylinderId: number | any;
  price: number | any;
  status:boolean=false;

  surrernderCyl:SurrenderCylinder[]|any;

  todaysDate = new Date();
  day = this.todaysDate.getDate();
  month = this.todaysDate.getMonth() + 1;
  year = this.todaysDate.getFullYear();
  currentDate: string = `${this.year}-${this.month}-${this.day}`;

  surrenderDate: string = `${this.year}-${this.month}-${this.day + 3}`;

  constructor(private fb: FormBuilder,private router:Router, private gasBookingservice: GasBookingService, private customerService: CustomerService, private surrenderService: SurrenderCylinderService) { }
  ngOnInit() {
    let type= sessionStorage.getItem("type");
    if (type == "Domestic") {
      this.price = 800;
    }
    else {
      this.price = 1000;
    }
    this.gasbookingForm = this.fb.group({
      bookingDate: [this.currentDate],
      bill: [this.price],
      customerId:[sessionStorage.getItem("customerId"),Validators.required]
    });
  }
  
  saveGasBooking() {
    let gb: any = this.gasbookingForm.value;
    sessionStorage.setItem("Date",gb.bookingDate);
    sessionStorage.setItem("price",this.price);
    sessionStorage.setItem("customerId",gb.customerId);

    this.router.navigate(['/payment']);
        
  }
}


