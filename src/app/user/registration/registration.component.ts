import {Component, OnInit} from '@angular/core';
import {AccountRegistration} from '../../entity/dto/account/account-registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() {
  }

  account = new AccountRegistration();

  ngOnInit() {

  }

}
