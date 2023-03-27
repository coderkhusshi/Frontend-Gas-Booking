import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractUser } from '../Models/abstractUser';
import { Bank } from '../Models/Bank';
import { Customer } from '../Models/Customer';
import { Cylinder } from '../Models/Cylinder';
import { BankService } from '../services/bank.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup | any;
  customers: Customer[] | any;
  cylinders: Cylinder[] | any;
  bank: Bank[] | any;
  isUpdate: boolean = false;
  banks: Bank[] | any;
  bankId: number | any;
  custId: number | any;
  cylinderId: number | any;
  weight: number | any;
  price: number | any;
  strapcolor: string | any;

  constructor(private fb: FormBuilder, private router: Router, private service: CustomerService, private bankService: BankService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerId: [''],
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]],
      address: ['', Validators.required],
      mobileNumber: ['', [
        Validators.required,
        Validators.pattern("[6-9]{1}[0-9]{2}[0-9]{4}[0-9]{3}"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      bankId: [''],
      bankName: ['', Validators.required],
      bankAddress: ['', Validators.required],
      accountNo: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(18)
      ]],
      ifscNo: ['', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
      ]],
      pan: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      cylinderType: ['']

    });

  }
  login($event:any) {
    this.router.navigate(['/customer/login']);
  }
  saveCustomer(): void {
    let cust: any = this.customerForm.value;
    alert(JSON.stringify(cust));
    //logic for saving the customer
    if (!this.isUpdate) {
      let bank = new Bank(this.bankId, cust.bankName, cust.bankAddress);

      if (cust.cylinderType == "Domestic") {
        this.weight = 50;
        this.price = 800;
        this.strapcolor = "yellow";
      }
      else {
        this.weight = 48;
        this.price = 1000;
        this.strapcolor = "red";
      }
      
      let cylinder = new Cylinder(this.cylinderId, cust.cylinderType, this.weight, this.strapcolor, this.price);

      let customer = new Customer(cust.username, cust.password, cust.address, cust.mobileNumber, cust.email, this.custId, bank, cust.accountNo, cust.ifscNo, cust.pan, cylinder);
      this.service.insertCustomer(customer)
        .subscribe(data => {
          alert("Customer with Id " + data.customerId + " is created");
          this.router.navigate(['/customer/login']);
          this.service.viewCustomers().subscribe(custs => {
            this.customers = custs;
          });
        },
        err=>alert("Customer Already exist"));
    }



    /*
    //updating the customer
    else {
      this.service.updateCustomer(cust).subscribe(data => {
        alert("Customer  is Updated");
        this.service.viewCustomers().subscribe(custs => {
          this.customers = custs;
        });
      });
      this.isUpdate = false;
    }
    this.customerForm.reset();

  }


  //Deletes the Customer
  deleteCustomer(customerId: number) {
    let candelete = confirm(`Are you Sure to Delete Customer '${customerId}'`);
    if (candelete == true) {
      this.service.deleteCustomer(customerId).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.viewCustomers().subscribe(custs => {
          this.customers = custs;
        });
      });
    }
  }

  UpdateCustomer(customerId: number) {
    let cust = this.customers.find((c: { customerId: number; }) => c.customerId == customerId)
    this.customerForm = this.fb.group({
      customerId: [cust?.customerId, Validators.required],
      accountNo: [cust?.accountNo, Validators.required],
      ifscNo: [cust?.ifscNo, Validators.required],
      pan: [cust?.pan, Validators.required],
      username: [cust?.username, Validators.required],
      password: [cust?.password, Validators.required],
      address: [cust?.address, Validators.required],
      mobileNumber: [cust?.mobileNumber, Validators.required],
      email: [cust?.email, Validators.required],
    });
    this.isUpdate = true;
  }*/
  }
}