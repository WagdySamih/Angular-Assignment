import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  of,
  takeUntil,
} from 'rxjs';

import { FakerService } from '@core/services';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private readonly localStorageKey = 'users';
  private readonly maxUserCount = 15;
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  private destroy$: Subject<void> = new Subject<void>();

  editedUserSubject = new BehaviorSubject<User | null>(null);
  editedUser$: Observable<User | null> = this.editedUserSubject.asObservable();

  constructor(private fakerService: FakerService) {
    this.loadUsersFromLocalStorage()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.error('Failed to load users from local storage:', error);
          return of([]);
        })
      )
      .subscribe(() => {
        this.generateUsersBulk().pipe(takeUntil(this.destroy$)).subscribe();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getUsers(): Observable<User[]> {
    return this.userListSubject.asObservable();
  }

  searchUsersByName(searchTerm: string): Observable<User[]> {
    const usersJSON = localStorage.getItem(this.localStorageKey);
    const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
    const searchedUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    this.userListSubject.next(searchedUsers);
    return of(searchedUsers);
  }

  getUserById(id: string): Observable<User | undefined> {
    const users: User[] = this.userListSubject.value;
    const user = users.find((user) => user._id === id);
    return of(user);
  }

  createUser(): Observable<User[]> {
    const user = this.fakerService.generateFakeUser();
    let users: User[] = this.userListSubject.value;
    users = [user, ...users];
    this.updateLocalStorage(users);
    this.userListSubject.next(users);
    return of(users);
  }

  editUser(editedUser: User): void {
    const users = this.userListSubject.value.map((user) =>
      user._id === editedUser._id ? editedUser : user
    );
    this.updateLocalStorage(users);
    this.userListSubject.next(users);
  }

  setEditedUser(user: User | null): void {
    this.editedUserSubject.next(user);
  }

  private generateUsersBulk(): Observable<User[]> {
    const users = this.userListSubject.value;
    const newUsers = [];
    for (let i = 0; i < this.maxUserCount - users.length; i++) {
      newUsers.push(this.fakerService.generateFakeUser());
    }
    const updatedUsers = [
      ...users,
      ...newUsers.slice(0, this.maxUserCount - users.length),
    ];
    this.updateLocalStorage(updatedUsers);
    this.userListSubject.next(updatedUsers);
    return of(updatedUsers);
  }

  private loadUsersFromLocalStorage(): Observable<User[]> {
    try {
      const usersJSON = localStorage.getItem(this.localStorageKey);
      const users: User[] = usersJSON ? JSON.parse(usersJSON) : [];
      this.userListSubject.next(users);
      return of(users);
    } catch (error) {
      console.error('Failed to load users from local storage:', error);
      return of([]);
    }
  }

  private updateLocalStorage(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }
}
