import type * as Koa from 'koa';

// Service
import BoardGameService from '../services/boardGame';

const boardGameService = new BoardGameService();

export default class BoardGameController { 
  public async getBoardGames(ctx: Koa.Context) {
    const boardGames = await boardGameService.getBoardGames();

    ctx.body = {
      boardGames,
    };
  }

  public async getBoardGameById(ctx: Koa.Context) {
    const boardGame = await boardGameService.getBoardGameById(ctx.params.id);

    ctx.body = {
      boardGame,
    };
  }

  public async createBoardGame(ctx: Koa.Context) {
    const { name, description } = ctx.request.body as any;

    if (!name || !description) {
      ctx.throw(400, 'name and description are required');
    }

    const boardGame = await boardGameService.createBoardGame(name, description);

    ctx.body = {
      boardGame,
    };
  }
};