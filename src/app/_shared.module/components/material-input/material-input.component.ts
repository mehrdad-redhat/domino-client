import {Component, Input, OnInit} from '@angular/core';
import {ISelectOption} from '../../../_models/interfaces';

@Component({
  selector: 'd-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {

  @Input() label:string='';
  @Input() placeholder:string='';
  @Input() placeholderDir:string='rtl';
  @Input() mode:string='input';
  @Input() options:ISelectOption[]=[];
  @Input() dir:string='rtl';
  @Input() type:string='text';
  @Input() pattern:any;
  @Input() title:string='';
  @Input() name:string='';
  @Input() maxlength:number;

  constructor() { }

  ngOnInit() {
  }

}



