import Router from 'koa-router';
import api from './api/index';

const router: Router = new Router();

// restful api
router.use('/api', api.routes());

export default router;