import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tabs = [
    {link: 'category', label: 'КАТЕГОРІЇ', clicked: true},
    {link: 'subcategory', label: 'ПІДКАТЕГОРІЇ', clicked: false},
    {link: 'moderators', label: 'МОДЕРАТОРИ', clicked: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  tabClick(): void{
    this.tabs.forEach((t) => {
      t.clicked = false;
    });
  }
}
