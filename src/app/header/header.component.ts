import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  activeMenu:string='ice';
  browse(menu:string){
    this.activeMenu=menu;
  }

}
