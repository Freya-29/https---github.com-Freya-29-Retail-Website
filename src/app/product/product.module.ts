import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHeaderComponent } from './products/product-header/product-header.component';
import { ProductBasketComponent } from './products/product-basket/product-basket.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductHeaderComponent,
    ProductBasketComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductModule { }
