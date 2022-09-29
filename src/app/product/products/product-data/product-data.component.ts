import { Component, OnInit } from '@angular/core';
import { Products } from '../products.model';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  availProducts : Products[] = [
    new Products('iPhone', 'Apple' , 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp', 4, 1000),
    new Products('S22', 'Samsung' , 'https://m.media-amazon.com/images/I/71HUnJvHsbL._SL1500_.jpg', 2, 500),
  ]


}
