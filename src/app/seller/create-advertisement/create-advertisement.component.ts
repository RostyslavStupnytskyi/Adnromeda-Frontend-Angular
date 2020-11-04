import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdvertisementRequest} from '../../entity/advertisement/advertisementRequest/advertisement-request';
import {PropertiesRequest} from '../../entity/advertisement/propertiesRequest/properties-request';
import {Property} from '../../entity/advertisement/property/property';
import {AdvertisementService} from '../../service/advertisement/advertisement.service';
import {CategoryService} from '../../service/category/category.service';
import {SubcategoryService} from '../../service/subcategory/subcategory.service';
import {Category} from '../../entity/category/category';
import {Subcategory} from '../../entity/subcategory/subcategory';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.scss']
})
export class CreateAdvertisementComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService,
              private categoryService: CategoryService,
              private subcategoryService: SubcategoryService) {
  }

  advertisement = new AdvertisementRequest();
  propertiesRequest = new PropertiesRequest();
  categories: Array<Category>;
  subcategories: Array<Subcategory>;
  categoryId: number;

  @ViewChild('propertyName')
  propertyNameInput: ElementRef;

  @ViewChild('propertyValue')
  propertyValueInput: ElementRef;

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
      console.log(response);
    });
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
    this.propertiesRequest.properties.push(new Property(propertyName, propertyValue));
    this.propertyNameInput.nativeElement.value = '';
    this.propertyValueInput.nativeElement.value = '';
  }

  deleteProperty(property: Property): void {
    const index = this.propertiesRequest.properties.indexOf(property);
    if (index > -1) {
      this.propertiesRequest.properties.splice(index, 1);
    }
  }

  createButtonClick(): void {
    this.advertisementService.postAdvertisement(this.advertisement).subscribe((response) => {
      this.propertiesRequest.advertisementId = response;
      this.advertisementService.postProperties(this.propertiesRequest).subscribe(() => {
      });
    });
  }

  categorySelect(): void {
    this.subcategoryService.getSubcategoriesByCategoryId(this.categoryId).subscribe((response) => {
      this.subcategories = response;
    });
  }
}
