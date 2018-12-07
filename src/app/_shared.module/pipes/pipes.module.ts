import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FilterPipe} from "./filter.pipe";
import {JalaliDatePipe} from "./jalali-date.pipe";
import {TextHelperPipe} from "./textHelper.pipe";


@NgModule({
	imports: [
		CommonModule,

	],
	declarations: [
		FilterPipe,
		JalaliDatePipe,
		TextHelperPipe,
	],
	exports: [
		FilterPipe,
		JalaliDatePipe,
		TextHelperPipe,
	]
})
export class PipesModule {
}
