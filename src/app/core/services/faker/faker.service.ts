import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { User } from '@app/core/models';

@Injectable({
  providedIn: 'root',
})
export class FakerService {
  generateFakeUser(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.firstName();
    return {
      _id: faker.string.uuid(),
      firstName,
      lastName,
      avatar: faker.image.avatar(),
      email: (firstName + '.' + lastName + '@gmail.com').toLowerCase(),
      street: faker.location.street(),
      city: faker.location.city(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode().replace(/-/g, ''),
    };
  }
}
