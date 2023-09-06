import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardGamesService } from '@services/board-game.service';
import { BoardGame } from 'app/core/models/board-game.model';

@Component({
  selector: 'app-board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.css']
})
export class BoardGameComponent implements OnInit {
  boardGame: BoardGame | null;
  constructor(
    private route: ActivatedRoute,
    private readonly boardGamesService: BoardGamesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;

    this.boardGamesService.getBoardGameById(id).subscribe({
      next: (boardGame: BoardGame) => {
        this.boardGame = boardGame;
      }
    });
  }
}
