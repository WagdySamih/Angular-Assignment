import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { LocalStorageService, LoggerService } from '..';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private readonly AVATAR_IMAGES_KEY = 'avatarImages';
  private readonly AVATAR_IMAGES_CNT = 10;
  private avatarImages: string[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private logger: LoggerService
  ) {
    this.initializeAvatarImages();
  }

  private initializeAvatarImages() {
    try {
      this.avatarImages =
        this.localStorageService.get<string[]>(this.AVATAR_IMAGES_KEY) || [];

      if (!this.avatarImages) {
        this.avatarImages = this.generateRandomImages(this.AVATAR_IMAGES_CNT);
        this.localStorageService.set(this.AVATAR_IMAGES_KEY, this.avatarImages);
      }
    } catch (error) {
      this.logger.error(error);
    }
  }

  selectRandomImage(): string {
    const index = Math.floor(Math.random() * this.avatarImages.length);
    return this.avatarImages[index];
  }

  generateRandomImages(count: number): string[] {
    try {
      const images: string[] = [];
      for (let i = 0; i < count; i++) {
        images.push(faker.image.avatar());
      }
      return images;
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }
}
