import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'boardGamesDB', 
  synchronize: true, 
  logging: false, 
  entities: [ 
   'src/entities/**/*.ts' ],
});

export default AppDataSource;
