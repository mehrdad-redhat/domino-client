import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  constructor(private el:ElementRef) { }

  ngOnInit() {
  }
  @ViewChild('selectedNum') selectedNum;
  @ViewChildren('numbers') gooNumbers:QueryList<ElementRef>;
  ngAfterViewInit(){
    console.log(this.selectedNum);
    console.log(this.gooNumbers.toArray()[0]);
    this.selectedNum.nativeElement.style.left=this.gooNumbers.toArray()[0].nativeElement.offsetLeft-8+'px';
  }

  moveGoo(event){
    let target = event.target || event.srcElement || event.currentTarget;
    console.log(target);
    this.selectedNum.nativeElement.style.left=target.offsetLeft-8+'px';
  }

}
