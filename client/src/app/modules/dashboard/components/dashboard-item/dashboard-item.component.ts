import { Component, Input } from '@angular/core';
import { BoardGame } from 'app/core/models/board-game.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css'],
})
export class DashboardItemComponent {
  @Input() boardGame: BoardGame;
}
