import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { LocalStorageService } from '..';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private readonly AVATAR_IMAGES_KEY = 'avatarImages';
  private readonly AVATAR_IMAGES_CNT = 10;
  private avatarImages: string[] = [];

  constructor(private localStorageService: LocalStorageService) {
    this.initializeAvatarImages();
  }

  private initializeAvatarImages() {
    this.avatarImages =
      this.localStorageService.get<string[]>(this.AVATAR_IMAGES_KEY) || [];

    if (!this.avatarImages) {
      this.avatarImages = this.generateRandomImages(this.AVATAR_IMAGES_CNT);
      this.localStorageService.set(this.AVATAR_IMAGES_KEY, this.avatarImages);
    }
  }

  selectRandomImage(): string {
    const index = Math.floor(Math.random() * this.avatarImages.length);
    return this.avatarImages[index];
  }

  generateRandomImages(count: number): string[] {
    const images: string[] = [];
    for (let i = 0; i < count; i++) {
      images.push(faker.image.avatar());
    }
    return images;
  }
}
