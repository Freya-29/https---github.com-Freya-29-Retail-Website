import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductBasketComponent } from "../product/products/product-basket/product-basket.component";
import { ProductDataComponent } from "../product/products/product-data/product-data.component";
import { ProductHeaderComponent } from "../product/products/product-header/product-header.component";
import { CustomerExistingComponent } from "./customer-page/customer-existing/customer-existing.component";
import { CustomerNewComponent } from "./customer-page/customer-new/customer-new.component";

import { CustomerPageComponent } from "./customer-page/customer-page.component";

const routes: Routes = [
  { path : '',redirectTo:'customer-info', pathMatch:'full'},
    { path : 'customer-info',  component: CustomerPageComponent, children:[
      {path: 'new', component: CustomerNewComponent},
      {path : 'existing', component: CustomerExistingComponent},
      
    ]},
   
    // {path: 'nextpage/:id', component:ProductHeaderComponent, children:[
    //   {path: 'productData', component:ProductDataComponent}
    // ]},
  
  ];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class customerRoutingModule {}