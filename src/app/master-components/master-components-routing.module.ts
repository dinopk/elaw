import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponentsComponent } from './master-components.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    {
        path: '', component: MasterComponentsComponent,
        children: [
            {path: '', component: ProductListComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MasterComponentsRoutingModule { }