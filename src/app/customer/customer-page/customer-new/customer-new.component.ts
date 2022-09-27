import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataservicesService } from 'src/app/service/dataservices.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  constructor(private _customerData:DataservicesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm){
    this._customerData.setdata(form.value);
    // this.router.navigate(['nextpage']);
  }


  
}