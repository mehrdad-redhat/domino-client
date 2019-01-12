import {AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  sectionElements:NodeListOf<Element>;
  loaded:boolean=false;

  ngAfterViewInit(){
    setTimeout(()=>{
      this.sectionElements=document.querySelectorAll('div.domino-section-element');
      this.loaded=true;
    },500)
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(this.loaded){
      this.sectionElements.forEach((el)=>{
        if(AppComponent.isInViewPort(el)){
          el.classList.add('active');
        }else{
          el.classList.remove('active');
        }
      })
    }
  }

  static isInViewPort(elem:Element){
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}
