import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdvertisementRequest} from '../../entity/advertisement/advertisementRequest/advertisement-request';
import {PropertiesRequest} from '../../entity/advertisement/propertiesRequest/properties-request';
import {Property} from '../../entity/advertisement/property/property';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  constructor() {
  }

  advertisement = new AdvertisementRequest();
  properties = new PropertiesRequest();

  @ViewChild('propertyName')
  propertyNameInput: ElementRef;

  @ViewChild('propertyValue')
  propertyValueInput: ElementRef;

  ngOnInit(): void {
  }

  handleMainUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.advertisement.mainImage = reader.result.toString();
    };
  }

  handleUpload(event): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.advertisement.images.push(reader.result.toString());
    };
  }

  addProperty(): void {
    const propertyName = this.propertyNameInput.nativeElement.value;
    const propertyValue = this.propertyValueInput.nativeElement.value;
    this.properties.properties.push(new Property(propertyName, propertyValue));
    this.propertyNameInput.nativeElement.value = '';
    this.propertyValueInput.nativeElement.value = '';
  }
}
