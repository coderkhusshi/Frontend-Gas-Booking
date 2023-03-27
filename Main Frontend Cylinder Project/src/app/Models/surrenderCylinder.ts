import { Customer } from "./Customer";
import { Cylinder } from "./Cylinder";

export class SurrenderCylinder{
    surrenderId: number;
    surrenderDate:String;
    customer:Customer ;
    cylinder:Cylinder;
    
    constructor(surrenderId:number, surrenderDate:String,customer:Customer,cylinder:Cylinder){
        this.surrenderId = surrenderId;
        this.surrenderDate = surrenderDate;
        this.customer=customer;
        this.cylinder=cylinder;
    }
}