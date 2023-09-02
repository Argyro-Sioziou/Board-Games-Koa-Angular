import Router from 'koa-router';
import boardGameApi from './boardGame';

const router: any = new Router();

boardGameApi(router);

export default router;