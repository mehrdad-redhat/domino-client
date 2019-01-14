import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {HomeService} from './home.service';
import {ArticleThumbnail, Slide} from '../_models/interfaces';

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
  activeDominoBookArticle: number = 1;
  activeSlide:number=0;

  constructor() {
  }

  ngOnInit() {
    this.dominoBookArticles = [
      {
        category: 'آشپزی',
        category_alias: 'cooking',
        title: '۲۵ راز در آشپزی',
        description: 'در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.',
        alias: 'cooking',
        image_link: '../../assets/images/blog-cooking.png'
      },
      {
        category: 'اخبار',
        category_alias: 'news',
        title: 'محصولات جدید دومینو',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
        alias: 'new-domino-products',
        image_link: '../../assets/images/blog-news.png'
      },
      {
        category: 'کمپین',
        category_alias: 'campaign',
        title: 'مسابقه دسر قاشقی دومینو',
        description: 'از افتخارات دومینو ساخت و بهره برداری از دومین دستگاه تولیدی بستنی بر اساس تحقیقات و ایده پردازی تیم تحقیق و توسعه و فنی شرکت و تولید بزرگترین تولید گنندگان و شرکت دومینو محفوظ باقی خواهد ماند.',
        alias: 'spoon-desert-contest',
        image_link: '../../assets/images/blog-campaign.png'
      }
    ];

    this.sliders = [
      {
        caption: `با ما در کمپین خـلاقیت<br>در آشپزی با دسر قاشقی<br>دومیــنــــــو همراه شوید.`,
        button_caption: 'مشاهده شرایط مسابقه',
        button_link: '/blog/campaign-conditions',
        images: [
          '../../assets/images/slider-test/2/1.png',
          '../../assets/images/slider-test/2/2.png',
          '../../assets/images/slider-test/2/3.png'
        ]
      },
      {
        caption: `محصولات جدید دومینو<br>به زودی به بازار<br>عرضه میگردد.`,
        button_caption: 'مشاهده خبر',
        button_link: '/blog/new-products',
        images: [
          '../../assets/images/slider-test/1/1.png',
          '../../assets/images/slider-test/1/2.png',
          '../../assets/images/slider-test/1/3.png'
        ]
      },
      {
        caption: `طرز تهیه دسر طالبی<br>به همراه مسابقه جذاب<br>در وبلاگ دومینو.`,
        button_caption: 'مشاهده آموزش',
        button_link: '/blog/cooking',
        images: [
          '../../assets/images/slider-test/2/1.png',
          '../../assets/images/slider-test/2/2.png',
          '../../assets/images/slider-test/2/3.png'
        ]
      },
    ];

  }

  ngAfterViewInit() {
    this.selectedNum.nativeElement.style.left = this.gooNumbers.toArray()[0].nativeElement.offsetLeft - 8 + 'px';
    this.gooNumbers.toArray()[0].nativeElement.style.color = '#D53F56';

    this.makeArticleEnable(1);
  }

  moveGoo(event, number, click = true) {


    this.selectedNum.nativeElement.style.left = event.target.offsetLeft - 8 + 'px';
    this.gooNumbers.forEach((e) => {
      e.nativeElement.style.color = '#1E3CAA';
    });
    event.target.style.color = '#D53F56';
    if (click) {
      this.makeArticleEnable(number);
    }

  }

  makeArticleEnable(number) {
    this.dominoBookArticlesElements.forEach((e, i) => {
      console.log(e, i);
      if (i == number - 1) {
        e.nativeElement.style.opacity = '1';
        e.nativeElement.style.zIndex = '1';
      } else {
        e.nativeElement.style.opacity = '0';
        e.nativeElement.style.zIndex = '0';
      }
    });
  }

  slideBrowse(dir){
    if(dir=='right'){
      this.activeSlide=this.activeSlide==2?0:this.activeSlide+1;
    }else{
      this.activeSlide=this.activeSlide==0?2:this.activeSlide-1;
    }
  }

}
