import type Router from 'koa-router';

function userApi(router: Router) {
  /**
   * @route GET /api/user
   */
  router.get('/', async (ctx) => { ctx.body = 'Hello World' });
}

export default userApi;