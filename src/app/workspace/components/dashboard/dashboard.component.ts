import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Universe } from 'src/app/models/universe.models';
import { HttpService } from 'src/app/services/http.service';
import { DataStoreService } from 'src/app/workspace/services/data-store.service';

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
      const activeUniverse = this.dataStore.getActiveUniverse();

      if (activeUniverse.id !== universeId) {
        this.http
          .get<Universe>(`universes/${universeId}`)
          .subscribe((universe) => {
            this.dataStore.setActiveUniverse(universe);
          });
      }
    });
  }
}
