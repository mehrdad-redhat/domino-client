import {AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {aboutCircleImages} from '../../_data/mock-data';

@Component({
  selector: 'd-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['../static-pages.module.scss', './about-us.component.scss']
})


export class AboutUsComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {

    this.circleImages = aboutCircleImages;


  }

  @ViewChild('selectedNum') selectedNum;
  @ViewChildren('numbers') gooNumbers: QueryList<ElementRef>;
  @ViewChildren('circles') circles: QueryList<ElementRef>;
  circleImages: string[] = [];
  selectedCircleImage: number = 0;

  ngAfterViewInit() {
    this.selectedNum.nativeElement.style.left = this.gooNumbers.toArray()[0].nativeElement.offsetLeft - 8 + 'px';
    this.gooNumbers.toArray()[0].nativeElement.style.color = '#D53F56';

    setInterval(() => {
      this.selectedCircleImage = this.selectedCircleImage == 2 ? 0 : this.selectedCircleImage + 1;
      this.moveGoo(
        {
          target: this.gooNumbers.toArray()[this.selectedCircleImage].nativeElement
        }, this.selectedCircleImage, false
      );
    }, 3500);

    if(window.innerWidth<427){
      this.makeCircles(85);
    }else{
      this.makeCircles(120);
    }
  }

  moveGoo(event, index, click = true) {
    let target = event.target || event.srcElement || event.currentTarget;
    this.gooNumbers.forEach((e) => {
      e.nativeElement.style.color = '#1E3CAA';
    });
    event.target.style.color = '#D53F56';
    this.selectedNum.nativeElement.style.left = target.offsetLeft - 8 + 'px';

    if (click) {
      this.selectedCircleImage = index;
    }

  }


  static pointMaker(r, a) {
    return (
      (Math.cos(a) * r).toFixed(3) +
      'px,' +
      (-1 * Math.sin(a) * r).toFixed(3) +
      'px'
    );
  }

  makeCircles(radius) {
    const alpha = Math.PI * (2 / this.circles.length);
    let b = Math.PI / 2;
    this.circles.forEach((c) => {
      c.nativeElement.style.transform = 'translate(' + AboutUsComponent.pointMaker(radius, b) + ')';
      console.log('translate(' + AboutUsComponent.pointMaker(radius, b) + ')');
      b = b + alpha;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 427) {
      this.makeCircles(85);
    }else{
      this.makeCircles(120);
    }
  }

}
