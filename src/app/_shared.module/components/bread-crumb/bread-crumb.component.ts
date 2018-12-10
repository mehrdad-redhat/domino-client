import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'd-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input() white:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
