import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'd-cooking-content',
  templateUrl: './cooking-content.component.html',
  styleUrls: ['./cooking-content.component.scss']
})
export class CookingContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('articleData') data:any;

}
