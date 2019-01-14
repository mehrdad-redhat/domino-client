import { Component, OnInit } from '@angular/core';
import {ISelectOption} from '../../_models/interfaces';

@Component({
  selector: 'd-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['../static-pages.module.scss','./critics.component.scss']
})
export class CriticsComponent implements OnInit {

  constructor() { }
  gradOption:ISelectOption[];
  categoryOption:ISelectOption[];
  phonePattern="^(9|(09)|(\\+989))(((1)|(3)|(2))([0-9]))(\\d{7})";
  ngOnInit() {
    console.log(typeof this.phonePattern);
    this.gradOption=[
      {
        title:'دیپلم',
        value:'دیپلم'
      },
      {
        title:'فوق دیپلم',
        value:'فوق دیپلم'
      },
      {
        title:'لیسانس',
        value:'لیسانس'
      },
      {
        title:'فوق لیسانس',
        value:'فوق لیسانس'
      },
      {
        title:'بالاتر',
        value:'بالاتر'
      },
      {
        title:'سایر',
        value:'سایر'
      },
    ];

    this.categoryOption=[
      {
        title:'پیشنهاد',
        value:'پیشنهاد'
      },
      {
        title:'انتقاد',
        value:'انتقاد'
      },
      {
        title:'شکایت',
        value:'شکایت'
      },
    ]
  }

}
