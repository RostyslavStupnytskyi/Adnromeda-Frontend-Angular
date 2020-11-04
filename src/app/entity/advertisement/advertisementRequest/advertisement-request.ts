export class AdvertisementRequest {
  title: string;
  description: string;
  mainImage: string;
  images =  Array<string>();
  subcategoryId: number;
  price: number;
}
