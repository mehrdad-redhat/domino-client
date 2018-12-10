import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'd-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.products=[
      {
        logo:'../../../assets/images/product-grid/stickbar-logo.png',
        image:'../../../assets/images/product-grid/stickbar.png',
        subProducts:[
          'کاکائو با روکش شکلات شیری و بادام',
          'قهوه با روکش شکلات شیری و بادام',
          'زعفرانی با روکش زعفران'
        ],
        brandColor:'#FEAE62'
      },
      {
        logo:'../../../assets/images/product-grid/friuty-logo.png',
        image:'../../../assets/images/product-grid/friuty.png',
        subProducts:[
          'آناناس',
          'طالبی',
          'توت‌فرنگی',
          'انگور',
          'هندوانه'
        ],
        brandColor:'#D53F56'
      },{
        logo:'../../../assets/images/product-grid/crispy-logo.png',
        image:'../../../assets/images/product-grid/crispy.png',
        subProducts:[
          'کاکائویی با روکش کاکائو و برنجک',
          'قهوه با روکش شکلات شیری و بادام'
        ],
        brandColor:'#909090'
      }
    ]
  }

  @ViewChild('rightSide') rightSide;
  @ViewChild('leftSide') leftSide;
  activeSlide:string='';
  products:any;

  slide(dir:string){
    this.activeSlide=dir;
    if(dir=='right'){
      this.rightSide.nativeElement.style.width=this.rightSide.nativeElement.children[0].children[0].scrollWidth+'px';
      this.leftSide.nativeElement.style.width='30px';
    }else{
      this.leftSide.nativeElement.style.width=this.leftSide.nativeElement.children[0].children[0].scrollWidth+'px';
      this.rightSide.nativeElement.style.width='30px';
    }
  }

}
