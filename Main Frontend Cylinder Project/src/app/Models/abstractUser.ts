export class AbstractUser{
    username:string;
    password:string;
    address:string;
    mobileNumber:string;
    email:string;
    
    constructor(username:string, password:string,  address:string,  mobileNumber:string,  email:string) {
        this.username = username;
        this.password = password;
        this.address = address;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    toString():String  {
		return "username=" + this.username + ", password=" + this.password + ", address=" + this.address
				+ ", mobileNumber=" + this.mobileNumber + ", email=" + this.email ;
	}
    
}