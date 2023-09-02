import "reflect-metadata";

import Koa from 'koa';
import routes from './routes/index';

const app = new Koa();

app.use(routes.routes());

app.listen(3000);

console.log('Server running on port 3000');