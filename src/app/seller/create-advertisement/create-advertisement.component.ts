import {Component, OnInit} from '@angular/core';
import {AdvertisementRequest} from '../../entity/advertisement/advertisementRequest/advertisement-request';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  constructor() {
  }

  advertisement = new AdvertisementRequest();

  ngOnInit(): void {
  }

  handleUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.advertisement.mainImage = reader.result.toString();
    };
  }
}
