import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { UniverseComponent } from './components/universes/universes.component';
import { NewUniverseComponent } from './components/universes/new-universe/new-universe.component';
import { UserComponent } from './components/user/user.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PlacesComponent } from './components/places/places.component';
import { ItemsComponent } from './components/items/items.component';
import { GroupsComponent } from './components/groups/groups.component';
import { EventsComponent } from './components/events/events.component';
import { NarrativesComponent } from './components/narratives/narratives.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', component: UniverseComponent },
      { path: 'user', component: UserComponent },
      { path: 'new', component: NewUniverseComponent },
      {
        path: ':id',
        component: DashboardComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'characters', component: CharactersComponent },
          { path: 'places', component: PlacesComponent },
          { path: 'items', component: ItemsComponent },
          { path: 'groups', component: GroupsComponent },
          { path: 'events', component: EventsComponent },
          { path: 'narratives', component: NarrativesComponent },
          { path: '**', pathMatch: 'full', redirectTo: '' },
        ],
      },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
