import {Component, OnInit} from '@angular/core';
import {Link} from '../../_models/interfaces';

@Component({
  selector: 'd-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.articles=[
      {
        thumbnail: '../../../assets/images/recom-blog/a1.png',
        title: 'کیک با شیر وانیلی',
        alias: 'cake-with-vanila-milk',
      },
      {
        thumbnail: '../../../assets/images/recom-blog/a2.png',
        title: 'کیک با شیر قهوه',
        alias: 'cake-with-coffe-milk',
      },
      {
        thumbnail: '../../../assets/images/recom-blog/a3.png',
        title: 'کیک با شیر سفید',
        alias: 'cake-with-regular-milk',
      }
    ];
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
