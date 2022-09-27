import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
 
    // { path : 'product',  component: CustomerPageComponent, children:[
    //   {path: 'new', component: CustomerNewComponent},
    //   {path : 'existing', component: CustomerExistingComponent}
      
    // ]}
    
  
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