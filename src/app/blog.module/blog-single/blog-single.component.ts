import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Link} from '../../_models/interfaces';
import {blogSingleCookingArticle, blogSingleNewsArticle} from '../../_data/mock-data';

@Component({
  selector: 'd-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.scss']
})
export class BlogSingleComponent implements OnInit{

  articleData: any;
  otherArticleData: any;
  breadCrumbLinks:Link[]=[];


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.articleData = blogSingleCookingArticle;
    this.otherArticleData = blogSingleNewsArticle;


    this.route.paramMap.subscribe(params => {
      if (params.get('bId') != 'cooking') {
        this.articleData = this.otherArticleData;
        this.breadCrumbLinks=[
          {
            title:'صفحه اصلی',
            link:'/'
          },
          {
            title:'بلاگ',
            link:'/blog'
          },
          {
            title:this.articleData.category=='cooking'?'آشپزی':(this.articleData.category=='news'?'اخبار':'کمپین‌ها'),
            link:'/blog',
            queryParams:{
              category:this.articleData.category
            }
          },
          {
            title:this.articleData.title,
            link:''
          }
        ];
      }
    });
  }



}
