import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  of,
  takeUntil,
} from 'rxjs';

import {
  FakerService,
  LoggerService,
  LocalStorageService,
} from '@core/services';
import { User } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private readonly LOCAL_STORAGE_KEY = 'users';
  private readonly MAX_USERS_CNT = 15;
  private userListSubject: BehaviorSubject<User[]> = new BehaviorSubject<
    User[]
  >([]);
  private destroy$: Subject<void> = new Subject<void>();

  editedUserSubject = new BehaviorSubject<User | null>(null);
  editedUser$: Observable<User | null> = this.editedUserSubject.asObservable();

  constructor(
    private fakerService: FakerService,
    private localStorageService: LocalStorageService,
    private logger: LoggerService
  ) {
    this.initializeLocalStorageUsers()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.logger.error(error);
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
    const users: User[] =
      this.localStorageService.get<User[]>(this.LOCAL_STORAGE_KEY) || [];
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
    this.localStorageService.set(this.LOCAL_STORAGE_KEY, users);
    this.userListSubject.next(users);
    return of(users);
  }

  editUser(editedUser: User): Observable<User> {
    const users = this.userListSubject.value.map((user) =>
      user._id === editedUser._id ? editedUser : user
    );
    this.localStorageService.set(this.LOCAL_STORAGE_KEY, users);
    this.userListSubject.next(users);
    return of(editedUser);
  }

  setEditedUser(user: User | null): void {
    this.editedUserSubject.next(user);
  }

  private generateUsersBulk(): Observable<User[]> {
    const users = this.userListSubject.value;
    const newUsers = this.fakerService.generateFakeUsers(
      this.MAX_USERS_CNT - users.length
    );

    const updatedUsers = [...users, ...newUsers];

    this.localStorageService.set(this.LOCAL_STORAGE_KEY, updatedUsers);
    this.userListSubject.next(updatedUsers);
    return of(updatedUsers);
  }

  private initializeLocalStorageUsers(): Observable<User[]> {
    try {
      const users =
        this.localStorageService.get<User[]>(this.LOCAL_STORAGE_KEY) || [];
      this.userListSubject.next(users);
      return of(users);
    } catch (error) {
      this.logger.error(error);
      return of([]);
    }
  }
}
