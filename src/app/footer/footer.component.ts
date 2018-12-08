import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  activeMenu:string='contact';
  browse(menu:string){
    this.activeMenu=menu;
  }

}
