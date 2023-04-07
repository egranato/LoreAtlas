import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'la-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public googleOAuthUrl: string;
  private googleScopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];

  constructor() {
    this.googleOAuthUrl = this.createGoogleOAuthUrl();
  }

  ngOnInit(): void {}

  private createGoogleOAuthUrl(): string {
    const baseUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

    const options = {
      redirect_uri: `${environment.apiUrl}/sessions/oauth/google`,
      client_id: environment.googleClientId,
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: this.googleScopes.join(' '),
    };

    const qs = new URLSearchParams(options);

    return `${baseUrl}?${qs.toString()}`;
  }
}
