import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universe } from 'src/app/models/universe.models';
import { DataStoreService } from 'src/app/services/data-store.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'la-universe',
  templateUrl: './universes.component.html',
  styleUrls: ['./shared.scss', './universes.component.scss'],
})
export class UniverseComponent implements OnInit {
  public universes: Array<Universe> = [];

  constructor(
    private http: HttpService,
    private router: Router,
    private dataStore: DataStoreService
  ) {}

  ngOnInit(): void {
    this.dataStore.activeUniverse = null;

    this.http
      .get<Array<Universe>>('universes')
      .subscribe((universes) => (this.universes = universes));
  }

  public newUniverse(): void {
    this.router.navigate(['workspace', 'new']);
  }

  public selectUniverse(universe: Universe): void {
    this.dataStore.activeUniverse = universe;
    this.router.navigate(['workspace', universe.id]);
  }
}
