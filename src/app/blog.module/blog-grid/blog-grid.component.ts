import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit {

  constructor() { }

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
      },
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
  }

  articles: any;
  activeHeader:string='';


}
