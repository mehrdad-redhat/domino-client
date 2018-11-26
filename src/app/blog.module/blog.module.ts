import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';

@NgModule({
  declarations: [BlogGridComponent, BlogSingleComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
