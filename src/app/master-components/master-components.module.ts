import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { MasterComponentsRoutingModule } from './master-components-routing.module';
import { MasterComponentsComponent } from './master-components.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ProductListComponent,
    MasterComponentsComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    MasterComponentsRoutingModule
  ]
})
export class MasterComponentsModule { }
