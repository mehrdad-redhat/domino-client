import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import {SharedModule} from '../_shared.module/shared.module';
import {RouterModule} from '@angular/router';
import { CookingContentComponent } from './blog-single/cooking-content/cooking-content.component';
import { OtherContentComponent } from './blog-single/other-content/other-content.component';

@NgModule({
  declarations: [BlogGridComponent, BlogSingleComponent, CookingContentComponent, OtherContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class BlogModule { }
