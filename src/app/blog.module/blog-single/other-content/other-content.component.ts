import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'd-other-content',
  templateUrl: './other-content.component.html',
  styleUrls: ['./other-content.component.scss']
})
export class OtherContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('articleData') data:any;
}
