import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataservicesService } from 'src/app/service/dataservices.service';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer-existing',
  templateUrl: './customer-existing.component.html',
  styleUrls: ['./customer-existing.component.css']
})
export class CustomerExistingComponent implements OnInit {

  // arr:{name : string, phoneNo: number, email:string , dob : number, address: string}[] = [];
  arr : Customer[];
  localItem : string | null;

  
  constructor(private router:Router,private route:ActivatedRoute, private _getdata:DataservicesService) { 

    this.localItem = localStorage.getItem("customerData");
    // console.log(this.localItem);
    
    if(this.localItem == null){
      this.arr = []
      
    }else{
      
      this.arr = JSON.parse(this.localItem);
      // console.log(this.arr);
      
    }
   
  }

  filterSearch='' ; 
  
  ngOnInit(): void {
    // this.sortByLastModifiedDesc;
  }

  // get sortByLastModifiedDesc() {
  //   return this.arr.sort((a:any, b:any) => {
  //     return <any>new Date(b.dateTime) - <any>new Date(a.dateTime);
  //   });
  // }

  onClick(id: number){
    // this._getdata.sendId(id)
    this.router.navigate(['products/nextpage', id]);
  }  

}
