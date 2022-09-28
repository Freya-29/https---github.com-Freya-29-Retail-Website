import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-basket',
  templateUrl: './product-basket.component.html',
  styleUrls: ['./product-basket.component.css']
})
export class ProductBasketComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  productData(){
    this.router.navigate(['productData']),{relativeTo:this.route};
 
    
  }

}
