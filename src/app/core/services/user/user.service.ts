import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { FakerService } from '@core/services';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localStorageKey = 'users';
  private usersCnt = 15;
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);

  constructor(private faker: FakerService) {
    this._loadUsersFromLocalStorage().subscribe({
      next: () => this._generateUsersBulk(),
    });
  }

  getUsers(): Observable<User[]> {
    return this.userListSubject.asObservable();
  }

  searchUsersByName(searchTerm: string): Observable<User[]> {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    const filteredUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    this.userListSubject.next(filteredUsers);
    return of(filteredUsers);
  }

  getUserById(id: string): Observable<User | undefined> {
    const users: User[] = this.userListSubject.value;
    const user = users.find((user) => user._id === id);
    return of(user);
  }

  addUser(): Observable<User[]> {
    const user = this.faker.generateFakeUser();
    let users: User[] = this.userListSubject.value;
    users = [user, ...users];
    this._updateLocalStorage(users);
    this.userListSubject.next(users);
    return of(users);
  }

  private _generateUsersBulk(): Observable<User[]> {
    const users: User[] = this.userListSubject.value;
    const newUsers: User[] = [];
    for (let i = 0; i < this.usersCnt - users.length; i++) {
      newUsers.push(this.faker.generateFakeUser());
    }

    users.push(...newUsers);
    this._updateLocalStorage(users);
    this.userListSubject.next(users);
    return of(users);
  }

  private _loadUsersFromLocalStorage(): Observable<User[]> {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    this.userListSubject.next(users);
    return of(users);
  }

  private _updateLocalStorage(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }
}
