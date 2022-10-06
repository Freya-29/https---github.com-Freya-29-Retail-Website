import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/customer/customer.model';
import { DataservicesService } from 'src/app/service/dataservices.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent implements OnInit {

  id:number;
  
  arr!: Customer;
  localItem!: string | null;

  constructor(private route:ActivatedRoute,private _getdata:DataservicesService,private router: Router){

    this.id=this.route.snapshot.params['id'];
    
    
    this.localItem = localStorage.getItem("customerData");
    console.log(this.localItem);
    
    if(this.localItem == null){
      
      console.log('Empty')
      
    }else{
      
      this.arr = JSON.parse(this.localItem)[this.id];
      console.log(this.arr);
      
    }
  }

  ngOnInit(){
    // this._getdata.customerId
    // .subscribe(
    //   (id: number) =>{
    //     console.log('fetched id' , id)
    //     // this.id = id
    //   })
    
  }

  goBack(){
    this.router.navigate(['../','customer-page','existing'])  
  }

  edit(){
    this.router.navigate(['../','customer-page','new'])
  }


  

}
