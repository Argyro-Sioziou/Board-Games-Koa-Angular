import bodyParser from './bodyParser';
import routes from './routes';

import cors from '@koa/cors';

export default (app: any) => {
  app.use(bodyParser); // body parser
  app.use(cors()); // cors
  app.use(routes); // routes
};

export { bodyParser };