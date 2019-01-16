import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ArticleThumbnail, Slide} from '../_models/interfaces';
import {homeDominoBookArticle, homeSlides} from '../_data/mock-data';

@Component({
  selector: 'd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {



  @ViewChild('selectedNum') selectedNum;
  @ViewChildren('numbers') gooNumbers: QueryList<ElementRef>;
  @ViewChildren('articles') dominoBookArticlesElements: QueryList<ElementRef>;

  dominoBookArticles: ArticleThumbnail[] = [];
  sliders: Slide[] = [];
  activeSlide:number=0;
  activeArticle:number=0;

  constructor() {
  }

  ngOnInit() {
    this.dominoBookArticles = homeDominoBookArticle;

    this.sliders = homeSlides;

  }

  ngAfterViewInit() {
    this.selectedNum.nativeElement.style.left = this.gooNumbers.toArray()[0].nativeElement.offsetLeft - 8 + 'px';
    this.gooNumbers.toArray()[0].nativeElement.style.color = '#D53F56';

    setInterval(()=>{
      this.activeArticle=this.activeArticle==2?0:this.activeArticle+1;
      this.moveGoo(
        {
          target:this.gooNumbers.toArray()[this.activeArticle].nativeElement
        },this.activeArticle,false
      )
    },5500);
  }

  moveGoo(event, number, click = true) {


    this.selectedNum.nativeElement.style.left = event.target.offsetLeft - 8 + 'px';
    this.gooNumbers.forEach((e) => {
      e.nativeElement.style.color = '#1E3CAA';
    });
    event.target.style.color = '#D53F56';
    if (click) {
      this.activeArticle=number;
    }

  }

  slideBrowse(dir){
    if(dir=='right'){
      this.activeSlide=this.activeSlide==2?0:this.activeSlide+1;
    }else{
      this.activeSlide=this.activeSlide==0?2:this.activeSlide-1;
    }
  }

}
