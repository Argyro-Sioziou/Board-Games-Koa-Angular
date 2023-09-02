import type Router from 'koa-router';

// Controllers
import BoardGameController from '../../controllers/boardGame';

// Initialize controller objects
const boardGameController = new BoardGameController();

function boardGameApi(router: Router) {
  /**
   * @route GET /api/boardGames/:id
   */
  router.get('/boardGames/:id', boardGameController.getBoardGameById);

  /**
   * @route GET /api/boardGames
   */
  router.get('/boardGames', boardGameController.getBoardGames);

  /**
   * @route POST /api/boardGames
   */
  router.post('/boardGames', boardGameController.createBoardGame);
}

export default boardGameApi;