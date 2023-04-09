import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universe } from 'src/app/models/universe.models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'la-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    private dataStore: DataStoreService,
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const universeId = params['id'];

      if (this.dataStore.activeUniverse?.id !== universeId) {
        this.http
          .get<Universe>(`universes/${universeId}`)
          .subscribe((universe) => {
            this.dataStore.activeUniverse = universe;
          });
      }
    });
  }
}
