import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';

import { AuthService } from '../../../core/services';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public authService: AuthService,
    private router: Router) {
  }

  onLogin() {
    const observer = {
      next: () => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '/admin';

          this.router.navigate([redirect]);
        }
      },
      error: (err: any) => console.log(err)
    };

    this.authService.login().subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.unsubscribe.complete();
  }
}
