import faker from 'faker';
import { Mappable } from './CustomMap';


export class User implements Mappable {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  getMarkerContent(): string {
    return `
      <div>
        <h2>User Name: ${this.name}</h2>
      </div>
    `;
  }
}