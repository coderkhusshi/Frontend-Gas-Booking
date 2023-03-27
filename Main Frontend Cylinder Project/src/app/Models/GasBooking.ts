import { Customer } from "./Customer";

export class GasBooking{

    gasBookingId:number;
    customer : Customer;
    bookingDate:Date;
    status:boolean;
    bill:number;
    

    constructor(gasBookingId:number,customer:Customer, bookingDate:Date, status:boolean, bill:number){
        this.gasBookingId = gasBookingId;
        this.customer=customer;
        this.bookingDate = bookingDate;
        this.status = status;
        this.bill=bill;
       
    }
    /*
    toString():string{
        return "Id: "+this.gasBookingId+", BookingDate: "+this.bookingDate+", Status:"+this.status+", Bill:"+this.bill;
    }*/
}