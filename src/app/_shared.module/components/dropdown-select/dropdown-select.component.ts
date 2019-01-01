import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'd-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownSelectComponent),
      multi: true
    }
  ]
})
export class DropdownSelectComponent implements ControlValueAccessor,OnInit {

  @Input() options:DropDownOption[]=[];
  @Input() autoFocus: boolean = false;
  @Input() type: string = 'text';
  @Input() name: string = null;
  @Input('value') _value = null;

  ngOnInit(){
    // setTimeout(()=>{
    //   this.change(2);
    // },0)
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  change(val) {
    this.value = val;
  }

}


interface DropDownOption {
  value:string;
  title:string;
}
