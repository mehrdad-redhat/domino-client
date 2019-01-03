import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private router:Router) { }
  navMenuActive:boolean=false;
  @ViewChild('header') header;

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.router.events.subscribe(
      ()=>{
        this.navMenuActive=false;
        this.header.nativeElement.scrollIntoView({behavior: "smooth", block: "start"});
      }
    );
  }

  activeMenu:string='ice';
  browse(menu:string){
    this.activeMenu=menu;
  }

}
