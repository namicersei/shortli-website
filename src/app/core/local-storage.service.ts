import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  setToken(token: any) {
    localStorage.setItem('currentUser', token);

  }
  getToken() {
    return localStorage.getItem('currentUser');
  }

  clearToken() {
    localStorage.removeItem('currentUser');
  }
}
