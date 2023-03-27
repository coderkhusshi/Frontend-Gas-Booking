export class Cylinder{

    cylinderId: number;
    type:string;
    weight:number;
    strapColor:string
    price:number;

    constructor(id:number, type:string,weight:number,strapColor:string,price:number){
        this.cylinderId = id;
        this.type = type;
        this.weight=weight;
        this.strapColor=strapColor;
        this.price=price;
    }/*
    toString():string{
        return "Id: "+this.cylinderId+", type: "+this.type+", weight:"+this.weight,
        "strapColor: "+this.strapColor+", price: "+this.price;
    }*/

}