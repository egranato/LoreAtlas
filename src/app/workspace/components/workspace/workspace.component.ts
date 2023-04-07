import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'la-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (Object.keys(params).length === 0) {
        this.authService.checkForTokens();
      } else {
        this.authService.initializeTokens(
          params['accessToken'],
          params['refreshToken']
        );
        this.router.navigate([], { relativeTo: this.route, queryParams: {} });
      }
    });
  }

  ngOnInit(): void {
    this.http.get('users').subscribe((userData) => {
      console.log(userData);
    });
  }
}
