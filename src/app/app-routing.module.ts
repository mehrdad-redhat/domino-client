import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductGridComponent} from './product.module/product-grid/product-grid.component';
import {ProductSingleComponent} from './product.module/product-single/product-single.component';
import {BlogGridComponent} from './blog.module/blog-grid/blog-grid.component';
import {BlogSingleComponent} from './blog.module/blog-single/blog-single.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductGridComponent},
  {path:'products/:pId',component:ProductSingleComponent},
  {path:'blog',component:BlogGridComponent},
  {path:'blog/:bId',component:BlogSingleComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
