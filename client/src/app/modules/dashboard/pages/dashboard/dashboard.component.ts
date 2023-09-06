import { Component } from '@angular/core';

import { BoardGamesService } from "@services/board-game.service";
import { BoardGame } from 'app/core/models/board-game.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  boardGames: BoardGame[] = [];
  constructor(private readonly boardGamesService: BoardGamesService) {}

  ngOnInit(): void {
    this.boardGamesService.getAll().subscribe({
      next: (boardGames: BoardGame[]) => {
        this.boardGames = boardGames;
      }
    });
  }
}
