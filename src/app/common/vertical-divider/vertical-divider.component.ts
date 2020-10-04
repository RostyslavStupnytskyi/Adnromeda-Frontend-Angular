import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-vertical-divider',
  templateUrl: './vertical-divider.component.html',
  styleUrls: ['./vertical-divider.component.scss']
})
export class VerticalDividerComponent implements OnInit {

  @Input() colorBorder: any;

  constructor() { }

  ngOnInit(): void {
  }

}
