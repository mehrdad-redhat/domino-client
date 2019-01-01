import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.module/home.component';
import {ProductGridComponent} from './product.module/product-grid/product-grid.component';
import {ProductSingleComponent} from './product.module/product-single/product-single.component';
import {BlogGridComponent} from './blog.module/blog-grid/blog-grid.component';
import {BlogSingleComponent} from './blog.module/blog-single/blog-single.component';
import {AboutUsComponent} from './static-pages.module/about-us/about-us.component';
import {ContactUsComponent} from './static-pages.module/contact-us/contact-us.component';
import {CriticsComponent} from './static-pages.module/critics/critics.component';
import {SurveyComponent} from './static-pages.module/survey/survey.component';
// import {TestComponent} from './static-pages.module/test/test.component';
// TODO: comment test component before commit
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductGridComponent},
  {path:'products/:pId',component:ProductSingleComponent},
  {path:'blog',component:BlogGridComponent},
  {path:'blog/:bId',component:BlogSingleComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'critics',component:CriticsComponent},
  {path:'survey',component:SurveyComponent},
  // {path:'test',component:TestComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
