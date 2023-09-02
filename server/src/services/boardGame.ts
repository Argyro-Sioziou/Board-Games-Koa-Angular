import BoardGameEntity from "../entities/boardGame";
import AppDataSource from "../data-source";

const boardGameRepository = AppDataSource.getRepository(BoardGameEntity);

export default class BoardGameService {
  public async getBoardGames(): Promise<BoardGameEntity[]> {
    // Get all board games
    const boardGames = await boardGameRepository.find();

    return boardGames;
  }

  public async getBoardGameById(id: number): Promise<BoardGameEntity | null> {
    // Get board game by specific id
    const boardGame = await boardGameRepository.findOneBy({ id });

    return boardGame;
  }

  public async createBoardGame(name: string, description: string): Promise<BoardGameEntity> {
    // Create new board game
    const createdBoardGame = await boardGameRepository.save({
      name,
      description,
    });

    return createdBoardGame;
  }
}