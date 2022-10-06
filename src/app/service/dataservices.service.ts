import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../customer/customer.model';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {


  
  public jstoday: string='';

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

  arr:{id:number, name : string ,email: string, phoneNo: number, dob : number, address: string, dateTime: string}[] = [];
//  arr! : Customer[];

  constructor() {
  }

   
  customerId = new Subject<number>();

  setdata(value:Customer){
    this.jstoday = new Date().toString().slice(0,23);
    let data = {
      id : value.id,
      name: value.name,
      email: value.email, 
      phoneNo:value.phoneNo, 
      dob:value.dob , 
      address:value.address, 
      dateTime:this.jstoday
    }

    console.log(this.jstoday);
    
    
    this.arr.push(data)
    console.log(this.arr);

    localStorage.setItem("customerData",JSON.stringify(this.arr));
  }

 
  sendId(index:number){
      this.customerId.next(index);
  }

  



 
}
