import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewUniverseComponent } from './components/universe/new-universe/new-universe.component';
import { UniverseComponent } from './components/universe/universe.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
  declarations: [
    WorkspaceComponent,
    DashboardComponent,
    UniverseComponent,
    NewUniverseComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WorkspaceModule {}
