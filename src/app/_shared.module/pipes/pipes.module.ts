import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FilterPipe} from "./filter.pipe";
import {JalaliDatePipe} from "./jalali-date.pipe";
import {TextHelperPipe} from "./textHelper.pipe";
import {CreateTimePipe} from './time-format.pipe';


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		FilterPipe,
		JalaliDatePipe,
		TextHelperPipe,
    CreateTimePipe
	],
	exports: [
		FilterPipe,
		JalaliDatePipe,
		TextHelperPipe,
    CreateTimePipe
	]
})
export class PipesModule {
}
