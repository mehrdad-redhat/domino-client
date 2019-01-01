import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  navMenuActive:boolean=false;


  ngOnInit() {
    this.router.events.subscribe(
      ()=>{
        this.navMenuActive=false;
      }
    );
  }

  activeMenu:string='ice';
  browse(menu:string){
    this.activeMenu=menu;
  }

}
