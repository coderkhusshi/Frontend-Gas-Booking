import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { AdminService } from './services/admin.service';
import { CustomerService } from './services/customer.service';
import { GasBookingService } from './services/gas-booking.service';
import { BankService } from './services/bank.service';
import { GasBookingModule } from './gas-booking/GasBooking.module';
import { CustomerModule } from './customer/Customer.module';
import { CylinderService } from './services/cylinder.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    GasBookingModule
  ],
  providers: [AdminService,CustomerService,GasBookingService,BankService,CylinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
