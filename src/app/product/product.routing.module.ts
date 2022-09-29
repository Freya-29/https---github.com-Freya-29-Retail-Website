import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDataComponent } from "./products/product-data/product-data.component";
import { ProductHeaderComponent } from "./products/product-header/product-header.component";

const routes: Routes = [    
    {path: 'nextpage/:id', component:ProductHeaderComponent},
    {path: 'nextpage/:id/productData', component:ProductDataComponent}
  ];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class ProductRoutingModule {}