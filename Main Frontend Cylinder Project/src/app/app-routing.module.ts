import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { MyActivityComponent } from './admin/my-activity/my-activity.component';
import { UpdateProfileComponent } from './admin/update-profile/update-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerForgotPasswordComponent } from './customer/customer-forgot-password/customer-forgot-password.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerMyActivityComponent } from './customer/customer-my-activity/customer-my-activity.component';
import { CustomerComponent } from './customer/customer.component';
import { GasBookingComponent } from './gas-booking/gas-booking.component';
import { PaymentComponent } from './gas-booking/payment/payment.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'admin/registration',component:AdminComponent},
  {path:'admin/login',component:AdminLoginComponent},
  {path:'myactivity',component:MyActivityComponent},
  {path:'gasbooking',component:GasBookingComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'customer/registration',component:CustomerComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/forgot',component:CustomerForgotPasswordComponent},
  {path:'customer/myactivity',component:CustomerMyActivityComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[AdminComponent,
                                AdminLoginComponent,
                                GasBookingComponent,
                                MyActivityComponent,
                                ForgotPasswordComponent,
                                UpdateProfileComponent,
                                AboutComponent,
                                HomeComponent,
                                CustomerComponent,
                                ContactUsComponent]