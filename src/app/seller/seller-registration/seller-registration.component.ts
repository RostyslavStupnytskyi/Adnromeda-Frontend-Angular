import { Component, OnInit } from '@angular/core';
import {SellerRegistration} from '../../entity/account/seller-registration/seller-registration';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})
export class SellerRegistrationComponent implements OnInit {

  constructor() { }

  seller = new SellerRegistration();

  ngOnInit(): void {
  }

}
