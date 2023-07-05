import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { User } from '@app/core/models';
import { ImagesService } from '../images/images.service';

@Injectable({
  providedIn: 'root',
})
export class FakerService {
  constructor(private imagesService: ImagesService) {}

  generateFakeUser(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      _id: faker.string.uuid(),
      firstName,
      lastName,
      avatar: this.imagesService.selectRandomImage(),
      email: (firstName + '.' + lastName + '@gmail.com').toLowerCase(),
      street: faker.location.street(),
      city: faker.location.city(),
      country: faker.location.country(),
      zipCode: faker.location.zipCode().replace(/-/g, ''),
    };
  }

  generateFakeUsers(count: number): User[] {
    const users: User[] = [];
    for (let i = 0; i < count; i++) {
      users.push(this.generateFakeUser());
    }
    return users;
  }
}
