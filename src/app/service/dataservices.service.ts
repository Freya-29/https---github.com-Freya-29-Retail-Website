import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  customers = [
    {
      id : 1,
      name : 'abc',
      email: 'abc@gmail.com',
      phoneNo : 65476588 
  },
  {
    id : 2,
    name : 'sdcs',
    email: '123@gmail.com',
    phoneNo : 65476589 
},
{
  id : 3,
  name : 'dscsd',
  email: '678@gmail.com',
  phoneNo : 65476580
}];

  arr:{id:number, name : string ,email: string, phoneNo: number, dob : number, address: string}[] = [];
//  arr! : Customer[];

  constructor() { }

  customerId = new Subject<number>();

  setdata(value:Customer){
    const data = value;
    
    this.arr.push(data)
    console.log(this.arr);

    localStorage.setItem("customerData",JSON.stringify(this.arr));
  }

  // getdata(){
  //   this.arr = localStorage.getItem("customerData")
  // }

 
  sendId(index:number){
      this.customerId.next(index);
  }

  



 
}
