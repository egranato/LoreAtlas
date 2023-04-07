import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
  declarations: [WorkspaceComponent, DashboardComponent],
  imports: [CommonModule, WorkspaceRoutingModule, FormsModule],
})
export class WorkspaceModule {}
