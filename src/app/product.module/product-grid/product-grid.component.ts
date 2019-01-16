import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Link} from '../../_models/interfaces';
import {productGridList} from '../../_data/mock-data';

@Component({
  selector: 'd-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.products=productGridList;
    this.breadCrumbLinks=[
      {
        title:'صفحه اصلی',
        link:'/'
      },
      {
        title:'محصولات',
        link:'/products'
      },
      {
        title:'بستنی',
        link:''
      }
    ];
    setTimeout(()=>{
      this.route.queryParams.subscribe(params => {
        if(params['type']=='dairy'){
          this.slide('left');
          this.breadCrumbLinks[2].title='لبنیات';
        }else{
          this.slide('right');
          this.breadCrumbLinks[2].title='بستنی';
        }
        this.activeSlide=params['type']=='ice-cream'?'right':'left';
      });
    },150);


  }

  @ViewChild('rightSide') rightSide;
  @ViewChild('leftSide') leftSide;
  activeSlide:string='';
  products:any;
  breadCrumbLinks:Link[]=[];

  slide(dir:string){
    this.activeSlide=dir;
    console.log(dir);
    if(window.innerWidth>767){
      if(dir=='right'){
        this.rightSide.nativeElement.style.width=this.rightSide.nativeElement.children[0].children[0].scrollWidth+'px';
        this.leftSide.nativeElement.style.width='30px';
        this.router.navigate(['/products'], {queryParams:{type:'ice-cream'}}).then();
      }else{
        this.leftSide.nativeElement.style.width=this.leftSide.nativeElement.children[0].children[0].scrollWidth+'px';
        this.rightSide.nativeElement.style.width='30px';
        this.router.navigate(['/products'], {queryParams:{type:'dairy'}}).then();
      }
    }
  }

}
