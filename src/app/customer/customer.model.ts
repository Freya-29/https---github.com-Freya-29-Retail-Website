export class Customer {
    public id : number;
    public name : string;
    public email : string;
    public phoneNo : number;
    public dob : number;
    public address: string;
    public dateTime: string;
    
    constructor(id: number , name : string, email : string, phoneNo : number,dob : number,address: string, dateTime:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
        this.dob = dob;
        this.address = address;
        this.dateTime = dateTime;
    }
}