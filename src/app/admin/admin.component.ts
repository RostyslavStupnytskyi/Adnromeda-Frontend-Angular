import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tabs = [
    {link: 'category', label: 'Категорії', clicked: true, block_end: false},
    {link: 'subcategory', label: 'Підкатегорії', clicked: false, block_end: true},
    {link: 'users', label: 'Користувачі', clicked: false, block_end: false},
    {link: 'admins', label: 'Адміни', clicked: false, block_end: false},
    {link: 'moderators', label: 'Модератори', clicked: false, block_end: false}

  ];

  constructor() { }

  ngOnInit(): void {
  }


}
