import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  getMarkerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.name}</h2>
        <h3>Slogan: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}