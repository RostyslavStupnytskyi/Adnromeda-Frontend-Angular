import {Property} from '../property/property';

export class PropertiesRequest {
  properties: Array<Property>;
  advertisementId: number;

  constructor() {
    this.properties = new Array<Property>();
  }
}
