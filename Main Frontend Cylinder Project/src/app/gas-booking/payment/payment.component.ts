import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { Cylinder } from 'src/app/Models/Cylinder';
import { GasBooking } from 'src/app/Models/GasBooking';
import { SurrenderCylinder } from 'src/app/Models/surrenderCylinder';
import { CustomerService } from 'src/app/services/customer.service';
import { GasBookingService } from 'src/app/services/gas-booking.service';
import { SurrenderCylinderService } from 'src/app/services/surrender-cylinder.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payForm: FormGroup | any;
  gasbookings: GasBooking[] | any;
  customer: Customer | any;
  gasBookingId: number | any;
  surrenderId: number | any;
  cylinderId: number | any;
  price: number | any;
  status:boolean=true;

  surrernderCyl:SurrenderCylinder[]|any;

  todaysDate = new Date();
  day = this.todaysDate.getDate();
  month = this.todaysDate.getMonth() + 1;
  year = this.todaysDate.getFullYear();
  currentDate: string = `${this.year}-${this.month}-${this.day}`;

  surrenderDate: string = `${this.year}-${this.month}-${this.day + 3}`;
  constructor(private fb: FormBuilder,private router:Router, private gasBookingservice: GasBookingService, private customerService: CustomerService, private surrenderService: SurrenderCylinderService) { }
 

  ngOnInit() {
    this.payForm = this.fb.group({
      firstName: ['',Validators.required],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      address: ['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]],
      cardname: ['',Validators.required],
      cardnumber: ['',[
        Validators.required,
        Validators.minLength(19),
        Validators.maxLength(19),
        Validators.pattern("[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}")
      ]],
      expmonth: ['',Validators.required],
      cvv:['',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
      ]]
    });
    
  }

  payment(){
    
    let date:any=sessionStorage.getItem("Date");
    let customerId=sessionStorage.getItem("customerId");
    let price:any=sessionStorage.getItem("price");

    let currentdate=new Date(date);

    this.customerService.viewCustomer(customerId)
      .subscribe(data => {
        this.customer = data;
       // alert("data " + JSON.stringify(this.customer));
      
      let gasbook = new GasBooking(this.gasBookingId, this.customer, currentdate,this.status,parseInt(price));
      //alert(JSON.stringify(gasbook));
      console.log(gasbook);
      this.gasBookingservice.insertGasBooking(gasbook).subscribe(data =>{
        alert("GasBooking with Id " + data.gasBookingId + " is created");
        this.gasbookings=data;
       }
      );
    //alert(JSON.stringify(this.customer.cylinder));
    let cyl=new Cylinder(this.customer.cylinder.cylinderId,this.customer.cylinder.type,this.customer.cylinder.weight,
      this.customer.cylinder.strapcolor,this.customer.cylinder.price);
     // alert("cyl"+JSON.stringify(cyl));
      let surrender=new SurrenderCylinder(this.surrenderId,this.surrenderDate,this.customer,cyl);
      this.surrenderService.insertSurrenderCylinder(surrender)
      .subscribe(data=>{
      this.surrernderCyl=data;
    },
      err=>alert("error"+JSON.stringify(err)))
    })
    alert("Cylinder Booked with Id "+ this.gasbookings.gasBookingId );


    sessionStorage.removeItem("Date");
    sessionStorage.removeItem("price");

    this.router.navigate(['/home']);
  }

}
