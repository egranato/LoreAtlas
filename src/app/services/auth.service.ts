import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor() {}

  checkForTokens(): void {
    this.accessToken = localStorage.getItem('la-ac');
    this.refreshToken = localStorage.getItem('la-re');
  }

  initializeTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;

    localStorage.setItem('la-ac', accessToken);
    localStorage.setItem('la-re', refreshToken);
  }

  updateAccessToken(accessToken: string | null): void {
    this.accessToken = accessToken;

    if (accessToken) localStorage.setItem('la-ac', accessToken);
  }

  getTokens(): { accessToken: string | null; refreshToken: string | null } {
    return { accessToken: this.accessToken, refreshToken: this.refreshToken };
  }

  removeTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;

    localStorage.removeItem('la-ac');
    localStorage.removeItem('la-re');
  }
}
