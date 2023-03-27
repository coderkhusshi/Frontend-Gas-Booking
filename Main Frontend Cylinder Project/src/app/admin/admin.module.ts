import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AdminComponent } from './admin.component';
import { MyActivityComponent } from './my-activity/my-activity.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ManageCylinderComponent } from './manage-cylinder/manage-cylinder.component';
import { ViewGasBookingComponent } from './view-gas-booking/view-gas-booking.component';


@NgModule({
  declarations: [AdminComponent, MyActivityComponent, UpdateProfileComponent,AdminLoginComponent, ForgotPasswordComponent, ViewCustomerComponent, ManageCylinderComponent, ViewGasBookingComponent],
  imports: [CommonModule,
ReactiveFormsModule],
  exports: [AdminComponent]
})
export class AdminModule { }
