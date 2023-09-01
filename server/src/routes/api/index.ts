import Router from 'koa-router';
import userApi from './user';

const router: any = new Router();

userApi(router);

export default router;