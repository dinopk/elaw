import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { MaterialModule } from './material/material.module';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [
    AlertModalComponent,
    CreateProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AlertModalComponent,
    CreateProductsComponent
  ],
  providers: [
    ProductService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    }
  }
 }
