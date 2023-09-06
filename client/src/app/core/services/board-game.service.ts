import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BoardGame } from "../models/board-game.model";

@Injectable({ providedIn: "root" })
export class BoardGamesService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<BoardGame[]> {
    return this.http
      .get<{ boardGames: BoardGame[] }>(`/board-games`)
      .pipe(map((data) => data.boardGames));
  }

  getBoardGameById(id: string): Observable<BoardGame> {
    return this.http
      .get<{ boardGame: BoardGame }>(`/board-games/${id}`)
      .pipe(map((data) => data.boardGame));
  }
}