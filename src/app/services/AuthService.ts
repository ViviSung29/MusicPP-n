import {Injectable} from '@angular/core';


@Injectable()

export class AuthService {
  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;

  }

  logout(): any {
    localStorage.removeItem(' username');
  }

  getUser(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser !== null;
  }
}

export let AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];