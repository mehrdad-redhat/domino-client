import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PipesModule} from "./pipes/pipes.module";
import {OnlyNumbersAllowedDirective} from "./directives/only-numbers-allowed.directive";
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';


@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    OnlyNumbersAllowedDirective,
    BreadCrumbComponent,
  ],
  exports: [
    PipesModule,
    BreadCrumbComponent
  ]
})
export class SharedModule {
}
