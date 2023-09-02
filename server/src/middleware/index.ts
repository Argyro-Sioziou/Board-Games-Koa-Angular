import bodyParser from './bodyParser';

import cors from '@koa/cors';

export default (app: any) => {
  app.use(bodyParser); // body parser
  app.use(cors()); // cors
};

export { bodyParser };