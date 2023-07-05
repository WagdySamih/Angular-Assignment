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
      avatar: this.selectRandomImage(),
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

  private generateRandomImages(count: number): string[] {
    const images: string[] = [];
    for (let i = 0; i < count; i++) {
      images.push(faker.image.avatar());
    }
    return images;
  }

  private selectRandomImage(): string {
    const avatarImages = this.generateRandomImages(10);
    const index = Math.floor(Math.random() * avatarImages.length);
    return avatarImages[index];
  }
}
