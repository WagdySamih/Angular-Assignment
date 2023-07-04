import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private isSearchEnabled = new BehaviorSubject<boolean>(false);
  private isCreateEnabled = new BehaviorSubject<boolean>(false);
  private isSaveEnabled = new BehaviorSubject<boolean>(false);

  isSearchEnabled$ = this.isSearchEnabled.asObservable();
  isCreateEnabled$ = this.isCreateEnabled.asObservable();
  isSaveEnabled$ = this.isSaveEnabled.asObservable();

  setIsSearchEnabled(value: boolean) {
    this.isSearchEnabled.next(value);
  }

  setIsCreateEnabled(value: boolean) {
    this.isCreateEnabled.next(value);
  }

  setIsSaveEnabled(value: boolean) {
    this.isSaveEnabled.next(value);
  }

  createUser() {
    //
  }

  saveUser() {
    //
  }

  searchUsers() {
    //
  }
}
