import {Component, OnInit} from '@angular/core';
import {SellerRegistration} from '../../entity/account/seller-registration/seller-registration';
import {SellerService} from '../../service/seller/seller.service';
import {Account} from '../../entity/account/account';
import {CookieService} from 'ngx-cookie-service';
import {AccountService} from '../../service/account/account.service';

@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.scss']
})
export class SellerRegistrationComponent implements OnInit {

  constructor(private sellerService: SellerService, public cookiesService: CookieService, private accountService: AccountService) {
    this.seller = new SellerRegistration();
    this.seller.registrationRequest = new Account();
  }

  seller: SellerRegistration;
  checkingConfirm = false;
  confirmCode: string;

  ngOnInit(): void {
  }

  registrationButtonClick(): void {
    console.log(this.seller);
    this.sellerService.registerSeller(this.seller).subscribe((response) => {
      this.cookiesService.set('user_id', response.id);
      this.checkingConfirm = true;
    });
  }

  sendConfirmCode(): void {
    const id = this.cookiesService.get('user_id');
    this.accountService.confirmingCode(id, this.confirmCode).subscribe((response) => {
      if (response){
        console.log('confirmed');
      }
    });
  }
}
