import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      { path: '', component: DashboardComponent },
      // { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkspaceRoutingModule {}
