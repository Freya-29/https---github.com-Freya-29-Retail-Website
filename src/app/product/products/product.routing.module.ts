import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDataComponent } from './product-data/product-data.component';

const routes: Routes = [
  
    ];
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ],
    declarations: [
      ProductDataComponent
    ]
})

export class customerRoutingModule {}