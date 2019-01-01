import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../_shared.module/shared.module';
import {RouterModule} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SurveyComponent } from './survey/survey.component';
import { CriticsComponent } from './critics/critics.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, SurveyComponent, CriticsComponent, TestComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule

  ]
})
export class StaticPagesModule { }
