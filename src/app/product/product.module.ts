import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './products/product-header/product-header.component';
import { ProductBasketComponent } from './products/product-basket/product-basket.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDataComponent } from './products/product-data/product-data.component';




@NgModule({
  declarations: [
    ProductHeaderComponent,
    ProductBasketComponent,
    ProductDataComponent
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductModule { }
