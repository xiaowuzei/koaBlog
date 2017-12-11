const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const U = require('../controller/user')

router.get('/hello', U.get)

router.post('/hello', U.post)

module.exports = router
