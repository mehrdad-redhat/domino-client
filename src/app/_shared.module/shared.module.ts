import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PipesModule} from "./pipes/pipes.module";
import {OnlyNumbersAllowedDirective} from "./directives/only-numbers-allowed.directive";
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { ModelViewerComponent } from './components/model-viewer/model-viewer.component';


@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    OnlyNumbersAllowedDirective,
    BreadCrumbComponent,
    ModelViewerComponent
  ],
  exports: [
    PipesModule,
    BreadCrumbComponent,
    ModelViewerComponent
  ]
})
export class SharedModule {
}
