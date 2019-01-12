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
    this.gooNumbers.toArray()[0].nativeElement.style.color="#D53F56";
  }

  moveGoo(event) {


    this.selectedNum.nativeElement.style.left = event.target.offsetLeft - 8 + 'px';
    this.gooNumbers.forEach((e)=>{
      e.nativeElement.style.color='#1E3CAA';
    })
    event.target.style.color="#D53F56";
  }

}
