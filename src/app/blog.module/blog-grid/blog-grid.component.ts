import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Link} from '../../_models/interfaces';
import {blogGridArticles} from '../../_data/mock-data';

@Component({
  selector: 'd-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})
export class BlogGridComponent implements OnInit, AfterViewInit {

  articles: any;
  activeHeader: string = '';
  @ViewChild('right') right;
  @ViewChild('center') center;
  @ViewChild('left') left;
  @ViewChild('parent') parent;
  categoryPosition: number;
  breadCrumbLinks: Link[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.articles = blogGridArticles;

    this.route.queryParams.subscribe(() => {
      // this.activeHeader = params['category'];
      this.breadCrumbLinks = [
        {
          title: 'صفحه اصلی',
          link: '/'
        },
        {
          title: 'بلاگ',
          link: '/blog'
        },
        {
          title: this.activeHeader == 'cooking' ? 'آشپزی' : (this.activeHeader == 'news' ? 'اخبار' : 'کمپین‌ها'),
          link: ''
        }
      ];
      this.categoryPosition = this.activeHeader == 'cooking' ? 2 : (this.activeHeader == 'news' ? 1 : 3);
      if (window.innerWidth <= 767) {
        let timer = setTimeout(() => {
          this.parent.nativeElement.style.transform = 'rotate(' + ((this.categoryPosition - 2) * 60) + 'deg)';
          clearTimeout(timer);
        }, 250);
      }

      this.activeCategory();
    });
  }

  ngAfterViewInit() {
    let w = this.center.nativeElement.offsetWidth;
    let h = this.center.nativeElement.offsetHeight;

    this.parent.nativeElement.style.transformOrigin = 'center ' + ((w * Math.sin(Math.PI / 3)) + h).toFixed(3) + 'px';

    this.activeCategory();
  }

  activeCategory() {
    let titles = this.parent.nativeElement.children;
    for (let t = 0; t < 3; t++) {
      if (this.categoryPosition - 1 == t) {
        titles[t].classList.add('active');
        titles[t].classList.remove('unActive');
      } else {
        titles[t].classList.add('unActive');
        titles[t].classList.remove('active');
      }
    }
  }

  changeCategory(dir: string) {
    if (dir == 'right') {
      this.categoryPosition = this.categoryPosition == 3 ? 3 : this.categoryPosition + 1;

    } else {
      this.categoryPosition = this.categoryPosition == 1 ? 1 : this.categoryPosition - 1;
    }
    let category = this.categoryPosition == 1 ? 'news' : (this.categoryPosition == 2 ? 'cooking' : 'campaign');
    this.router.navigate(['/blog'], {queryParams: {category: category}}).then();
    this.parent.nativeElement.style.transform = 'rotate(' + ((this.categoryPosition - 2) * 60) + 'deg)';
    this.activeCategory();


  }


}
