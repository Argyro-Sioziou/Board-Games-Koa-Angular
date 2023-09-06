import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { BoardGameComponent } from './pages/board-game/board-game.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardItemComponent,
    BoardGameComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
