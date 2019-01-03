import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  navMenuActive:boolean=false;
  @ViewChild('header') header;

  ngOnInit() {
    setTimeout(()=>{
      this.route.queryParams.subscribe(params => {
        this.activeMenu=params['type'];
      });
    },200)
  }

  ngAfterViewInit(){
    this.router.events.subscribe(
      ()=>{
        this.navMenuActive=false;
        this.header.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    );
  }

  activeMenu:string='ice-cream';
  browse(menu:string){
    this.router.navigate(['/products'], {queryParams:{type:menu}}).then();
    this.activeMenu=menu;
  }

}
