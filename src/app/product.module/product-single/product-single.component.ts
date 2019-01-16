import {Component, OnInit} from '@angular/core';
import {Link} from '../../_models/interfaces';
import {productSingleArticles} from '../../_data/mock-data';

@Component({
  selector: 'd-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.articles=productSingleArticles;
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
        link:'/products',
        queryParams:{
          type:'ice-cream'
        }
      },
      {
        title:'میوه‌ای',
        link:''
      },
    ]
  }

  activeColor: number = 3;
  activeProp: boolean = true;
  articles: any;
  breadCrumbLinks:Link[]=[];

}
