import { AbstractUser } from "./abstractUser";

export class Admin extends AbstractUser{

    adminId:number;

    constructor(username:string, password:string, address:string, mobileNumber:string, email:string,adminId:number){
        super(username, password, address, mobileNumber, email);
        this.adminId = adminId;
    
    }
    
}