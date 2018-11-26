import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  declarations: [ProductSingleComponent, ProductGridComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
