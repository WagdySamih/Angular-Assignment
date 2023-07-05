import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { User } from '@app/core/models';
import { ImagesService } from '../images/images.service';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class FakerService {
  constructor(
    private imagesService: ImagesService,
    private logger: LoggerService
  ) {}

  generateFakeUser(): User {
    try {
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
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  generateFakeUsers(count: number): User[] {
    try {
      const users: User[] = [];
      for (let i = 0; i < count; i++) {
        const user = this.generateFakeUser();
        user && users.push(user);
      }
      return users;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
