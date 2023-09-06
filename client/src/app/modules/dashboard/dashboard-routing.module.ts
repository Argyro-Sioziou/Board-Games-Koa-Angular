import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BoardGameComponent } from './pages/board-game/board-game.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'board-game/:id', component: BoardGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
