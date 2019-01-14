import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../../../_models/interfaces';

@Component({
  selector: 'd-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() white:boolean=false;
  @Input() links:Link[]=[];

  constructor() { }

  ngOnInit() {
  }

}

