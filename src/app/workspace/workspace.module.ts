import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersComponent } from './components/characters/characters.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { EventsComponent } from './components/events/events.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ItemsComponent } from './components/items/items.component';
import { NarrativesComponent } from './components/narratives/narratives.component';
import { PlacesComponent } from './components/places/places.component';
import { NewUniverseComponent } from './components/universes/new-universe/new-universe.component';
import { UniverseComponent } from './components/universes/universes.component';
import { UserComponent } from './components/user/user.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { DataStoreService } from './services/data-store.service';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    DashboardComponent,
    UniverseComponent,
    NewUniverseComponent,
    CharactersComponent,
    PlacesComponent,
    ItemsComponent,
    GroupsComponent,
    EventsComponent,
    NarrativesComponent,
    UserComponent,
    OverviewComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataStoreService
  ]
})
export class WorkspaceModule {}
