import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from '../customer/customer.component';
import { AdminComponent } from '../admin/admin.component';
import { GasBookingComponent } from './gas-booking.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [GasBookingComponent, PaymentComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [GasBookingComponent, PaymentComponent]
})
export class GasBookingModule { }
