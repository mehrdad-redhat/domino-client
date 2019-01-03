import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeGateway} from './home.gateway';
import {HomeService} from './home.service';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    InstaFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    HomeGateway,
    HomeService
  ]
})
export class HomeModule {
}
