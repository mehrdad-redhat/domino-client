import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSingleComponent } from './product-single/product-single.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import {SharedModule} from '../_shared.module/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProductSingleComponent, ProductGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ]
})
export class ProductModule { }
