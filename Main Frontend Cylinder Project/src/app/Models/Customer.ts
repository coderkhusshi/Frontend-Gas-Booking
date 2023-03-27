import { AbstractUser } from "./abstractUser";
import { Bank } from "./Bank";
import { Cylinder } from "./Cylinder";

export class Customer extends AbstractUser{  
    customerId:number;
    cylinder:Cylinder;
    bank:Bank;
    accountNo:string;
    ifscNo:number;
    pan:string;
    //abstractUser:AbstractUser;

    constructor(username:string, password:string, address:string, mobileNumber:string, email:string,id:number,bank:Bank, accountNo:string, ifscNo:number, pan:string,cylinder:Cylinder){
        super(username, password, address, mobileNumber, email);
        this.customerId = id;
        this.cylinder=cylinder;
        this.bank=bank;
        this.accountNo = accountNo;
        this.ifscNo = ifscNo;
        this.pan=pan;
    }
    /*toString():string{
        return "Id: "+this.customerId+", Account No.: "+this.accountNo+", Ifsc No.:"+this.ifscNo+"Pan: "+this.pan;
    }
    */

}