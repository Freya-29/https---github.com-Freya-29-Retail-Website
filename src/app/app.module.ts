import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { customerRoutingModule } from './customer/customer.routing.module';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product.routing.module';
import { DataservicesService } from './service/dataservices.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CustomerModule,
    AppRoutingModule,
    customerRoutingModule,
    ProductModule,
    ProductRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    DataservicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
