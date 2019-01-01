import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'd-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../static-pages.module.scss','./about-us.component.scss']
})



export class AboutUsComponent implements OnInit , AfterViewInit {

  constructor(){}

  ngOnInit() {


  }

  @ViewChild('selectedNum') selectedNum;
  @ViewChildren('numbers') gooNumbers: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.selectedNum.nativeElement.style.left = this.gooNumbers.toArray()[0].nativeElement.offsetLeft - 8 + 'px';
  }

  moveGoo(event) {
    let target = event.target || event.srcElement || event.currentTarget;

    this.selectedNum.nativeElement.style.left = target.offsetLeft - 8 + 'px';
  }

}
