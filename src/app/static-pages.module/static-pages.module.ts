import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../_shared.module/shared.module';
import {RouterModule} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SurveyComponent } from './survey/survey.component';
import { CriticsComponent } from './critics/critics.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, SurveyComponent, CriticsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule

  ]
})
export class StaticPagesModule { }
