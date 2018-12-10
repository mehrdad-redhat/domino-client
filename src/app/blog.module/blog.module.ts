import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import {SharedModule} from '../_shared.module/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [BlogGridComponent, BlogSingleComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class BlogModule { }
