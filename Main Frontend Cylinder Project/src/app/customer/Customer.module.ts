import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerForgotPasswordComponent } from './customer-forgot-password/customer-forgot-password.component';
import { CustomerMyActivityComponent } from './customer-my-activity/customer-my-activity.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { CustomerComponent } from './customer.component';
import { ViewCylinderComponent } from './view-cylinder/view-cylinder.component';
import { ViewGasBookingComponent } from './view-gas-booking/view-gas-booking.component';

@NgModule({
  declarations: [CustomerComponent,CustomerForgotPasswordComponent,CustomerLoginComponent,CustomerMyActivityComponent,CustomerUpdateProfileComponent, ViewCylinderComponent, ViewGasBookingComponent],
  imports: [CommonModule,ReactiveFormsModule],
  exports: [CustomerComponent]
})
export class CustomerModule { }
