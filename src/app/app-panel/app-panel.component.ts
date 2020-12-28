import {Component, OnInit} from '@angular/core';
import {AccountDialogComponent} from './registarion-dialog/account-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CategoryService} from '../service/category/category.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';
import {GlobalConstants} from '../common/global-constants';

@Component({
  selector: 'app-app-panel',
  templateUrl: './app-panel.component.html',
  styleUrls: ['./app-panel.component.scss']
})
export class AppPanelComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) {
  }

  username: string;
  userRole: string;

  ngOnInit(): void {
    this.getUserInfo();
  }


  openRegistration(reg: boolean): void {
    const data = {
      registration: reg
    };
    const dialogRef = this.dialog.open(AccountDialogComponent, {
        width: '600px',
        data
      })
    ;

    dialogRef.afterClosed().subscribe(result => { //дії пілся закриття вікна
      this.getUserInfo();
    });
  }

  getUserInfo(): void {
    this.username = this.cookieService.get('user_name') ? this.cookieService.get('user_name') : undefined;
    this.userRole = this.cookieService.get('user_role') ? this.cookieService.get('user_role') : undefined;
  }

  logout(): void {
    console.log(this.username);
    this.cookieService.delete('user_name');
    this.cookieService.delete('user_role');
    this.getUserInfo();
  }


  // tslint:disable-next-line:typedef
  loadTestData() {
    const countryLink = GlobalConstants.API_URL + 'country';

    // links for connection with API
    const registerSellerAccountLink = GlobalConstants.API_URL + 'account/register/goods-seller';
    const updateSellerAccountLink = GlobalConstants.API_URL + 'seller/update';
    const updateGoodsSellerAccountLink = GlobalConstants.API_URL + 'goods-seller/update';
    const registerUserAccountLink = GlobalConstants.API_URL + 'account/register/user';

    const categoryLink = GlobalConstants.API_URL + 'category';
    const subcategoryLink = GlobalConstants.API_URL + 'subcategory';
    const currencyLink = GlobalConstants.API_URL + 'currency';
    const deliveryLink = GlobalConstants.API_URL + 'delivery';

    const retailAdvertisementLink = GlobalConstants.API_URL + 'retail-goods';
    const wholesaleAdvertisementLink = GlobalConstants.API_URL + 'wholesale-goods';

    const currency1 = {
      code: 'UAH',
      name: 'Grivna',
      symbol: '₴'
    };
    const currency2 = {
      code: 'USD',
      name: 'Dollar',
      symbol: '$'
    };

    const userBody1 = {
      login: 'rostyk',
      password: '12345678'
    };
    let userToken1;
    const delivery1 = {
      countryCode: 'UA',
      international: true,
      title: 'Нова пошта'
    };
    const delivery2 = {
      countryCode: 'UA',
      international: false,
      title: 'Укрпошта'
    };

    const sellerBody1 = {
      login: 'rostyk.stup@gmail.com',
      password: '12345678'
    };
    const sellerUpdateBody1 = {
      shopName: 'Shop Shop Shop',
      taxpayerNumber: '13412341234'
    };

    const goodsSellerUpdateBody1 = {
      countryCodes: [
        'UA', 'GB'
      ],
      deliveryTypesId: [
        1, 2
      ],
      onlySellerCountryDelivery: true
    };

    let sellerHeader1;

    const retailAdvertisement1 = {
      count: 100,
      currencyId: 1,
      description: 'Оголошення працює',
      onlySellerCountry: true,
      price: {
        price: 100
      },
      properties: [
        {
          name: 'Voltage',
          value: '12 V'
        },
        {
          name: 'Power',
          value: '15W'
        }
      ],
      subcategoryId: 1,
      title: 'Atmega8'
    };

    const wholesaleAdvertisement1 = {
      count: 100,
      currencyId: 1,
      description: 'Оголошення працює',
      onlySellerCountry: true,
      price: {
        priceUnits: [
          {
            max: 10,
            min: 1,
            price: 200
          },
          {
            max: 100,
            min: 11,
            price: 195
          },
          {
            max: 1000,
            min: 101,
            price: 185
          }
        ]
      },
      properties: [
        {
          name: 'Voltage',
          value: '5 V'
        },
        {
          name: 'Power',
          value: '1W'
        }
      ],
      subcategoryId: 1,
      title: 'Atmega64'
    };

    this.httpClient.get<any>('https://restcountries.eu/rest/v2/all?fields=name;region;numericCode;alpha2Code')
      .subscribe((resp) => {
        for (const respKey in resp) {
          const country = resp[respKey];
          const body = {
            countryCode: country.alpha2Code,
            apiId: country.numericCode,
            region: country.region,
            englishName: country.name
          };
          this.httpClient.post(countryLink, body).subscribe(() => {
          });
        }

        // Body and request to save category and subcategory
        const category1 = {
          title: 'category1'
        };
        this.httpClient.post<any>(categoryLink, category1).subscribe((r) => {
          const subcategory1 = {
            categoryId: 1,
            title: 'subcategory1'
          };
          this.httpClient.post<any>(subcategoryLink, subcategory1).subscribe();
          this.httpClient.post<any>(currencyLink, currency1).subscribe(() => {

            this.httpClient.post<any>(currencyLink, currency2).subscribe();
            this.httpClient.post<any>(deliveryLink, delivery1).subscribe(() => {
              this.httpClient.post<any>(deliveryLink, delivery2).subscribe();
              this.httpClient.post<any>(registerSellerAccountLink, sellerBody1).subscribe((r) => {
                sellerHeader1 = {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + r.token
                };
                this.httpClient.put<any>(updateSellerAccountLink, sellerUpdateBody1, {headers: sellerHeader1}).subscribe();
                this.httpClient.put<any>(updateGoodsSellerAccountLink, goodsSellerUpdateBody1, {headers: sellerHeader1}).subscribe();
                // create some advertisements
                this.httpClient.post<any>(retailAdvertisementLink, retailAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(retailAdvertisementLink, retailAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(retailAdvertisementLink, retailAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(retailAdvertisementLink, retailAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(wholesaleAdvertisementLink, wholesaleAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(wholesaleAdvertisementLink, wholesaleAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(wholesaleAdvertisementLink, wholesaleAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(wholesaleAdvertisementLink, wholesaleAdvertisement1, {headers: sellerHeader1}).subscribe();
                this.httpClient.post<any>(wholesaleAdvertisementLink, wholesaleAdvertisement1, {headers: sellerHeader1}).subscribe();


                // Body and request to register users

                this.httpClient.post<any>(registerUserAccountLink, userBody1).subscribe((r) => {
                  userToken1 = r.token;
                });
              });
            });
          });
        });
      });

    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': 'Bearer ' + this.cookieService.get('user_token')
    // };
  }


}
