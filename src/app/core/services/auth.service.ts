import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return of(true).pipe(
      tap(val => this.isLoggedIn = val)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
