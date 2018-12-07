import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeGateway} from './home.gateway';
import {HomeService} from './home.service';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';

@NgModule({
  declarations: [
    HomeComponent,
    InstaFeedComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    HomeGateway,
    HomeService
  ]
})
export class HomeModule {
}
