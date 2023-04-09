import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'la-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  public menuOpen: boolean = false;
  public universes = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpService,
    public dataStore: DataStoreService
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
    this.http.get<User>('users').subscribe(this.dataStore.setCurrentUser);
  }
}
