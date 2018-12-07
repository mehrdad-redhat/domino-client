import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

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
