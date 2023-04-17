import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'la-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public googleOAuthUrl: string;
  public facebookOAuthUrl: string;

  private googleScopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.googleOAuthUrl = this.createGoogleOAuthUrl();
    this.facebookOAuthUrl = '';
  }

  ngOnInit(): void {
    this.authService.checkForTokens();
    const { accessToken, refreshToken } = this.authService.getTokens();

    if (accessToken || refreshToken) {
      this.router.navigate(['workspace']);
    }
  }

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
