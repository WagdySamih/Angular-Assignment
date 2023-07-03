import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { faker } from '@faker-js/faker';

import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localStorageKey = 'users';

  // Get all users from LocalStorage
  getUsers(): Observable<User[]> {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    return of(users);
  }

  // Get user by Id from LocalStorage
  getUserById(_id: string): Observable<User | undefined> {
    const users: User[] = this._getStoredUsers();
    const user = users.find((user) => user._id == _id);
    return of(user);
  }

  // Add a single user to LocalStorage
  addUser(user: User): Observable<User[]> {
    const users: User[] = this._getStoredUsers();
    users.push(user);
    this._updateLocalStorage(users);
    return of(users);
  }

  // Add multiple users to LocalStorage
  addMultipleUsers(): Observable<User[]> {
    const users: User[] = this._getStoredUsers();
    const usersToAdd: User[] = [];
    for (let i = 0; i < 15 - users.length; i++) {
      // TODO: Moves user creation using faker to a separate function
      const firstName = faker.person.firstName();
      const lastName = faker.person.firstName();
      const user = {
        _id: faker.string.uuid(),
        firstName,
        lastName,
        avatar: faker.image.avatar(),
        email: firstName + '.' + lastName + '@gmail.com',
        street: faker.location.street(),
        city: faker.location.city(),
        country: faker.location.country(),
        zipCode: faker.location.zipCode(),
      };
      usersToAdd.push(user);
    }

    users.push(...usersToAdd);
    this._updateLocalStorage(users);
    return of(users);
  }

  // Helper method to get users from LocalStorage
  private _getStoredUsers(): User[] {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    return usersJSON ? JSON.parse(usersJSON) : [];
  }

  // Helper method to update LocalStorage with updated user data
  private _updateLocalStorage(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }
}
