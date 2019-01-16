import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {menuProductsList} from '../_data/mock-data';

@Component({
  selector: 'd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  navMenuActive: boolean = false;
  @ViewChild('header') header: ElementRef;
  @ViewChild('rail') rail: ElementRef;
  @ViewChild('imagesHolder') imagesHolder: ElementRef;
  @ViewChildren('cats') categories: QueryList<ElementRef>;
  productList: any;
  activeSubcat: number = 1;
  activeProduct: number;

  ngOnInit() {
    this.productList = menuProductsList;
    setTimeout(() => {
      this.route.queryParams.subscribe(params => {
        if (params['type'] == this.productList[0].name) {
          this.activeMenu = 0;
        } else if (params['type'] == this.productList[1].name) {
          this.activeMenu = 1;
        } else {
          this.activeMenu = -1;
        }
      });
    }, 200);


  }

  ngAfterViewInit() {
    this.router.events.subscribe(
      () => {
        this.navMenuActive = false;
        this.header.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    );
  }

  activeMenu: number = -1;

  browse(menu) {
    // let type=menu==0?'ice-cream':'dairy';
    // this.router.navigate(['/products'], {queryParams:{type:type}}).then();
    if(this.activeMenu==menu){
      this.activeMenu=-1;
    }else{
      this.activeMenu = menu;
      setTimeout(() => {
        this.browsCats(1);
      }, 50);
    }
  }

  calculateRight(index: number) {
    if (this.categories.toArray().length != 0) {
      let dist = (this.categories.toArray()[0].nativeElement.offsetWidth / 2) + 30;
      const cats = this.categories.toArray();
      for (let i = index; i > 0; i--) {
        dist = dist + cats[i].nativeElement.offsetWidth + 30;
      }

      let railWidth = this.rail.nativeElement.offsetWidth;
      return (railWidth / 2) - dist;
    }
  }

  browsCats(index: number) {
    this.activeSubcat = index;
    this.imagesHolder.nativeElement.style.right = this.calculateRight(index) + 'px';
    console.log(this.calculateRight(index));
  }

  move(dir) {
    let rightStr = this.imagesHolder.nativeElement.style.right;
    let right = rightStr.split('px')[0];
    console.log();
    if (dir == 'right') {
      this.imagesHolder.nativeElement.style.right = (Number(right) - 150) + 'px';
    } else {
      this.imagesHolder.nativeElement.style.right = (Number(right) + 150) + 'px';
    }
  }


}
