const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const U = require('../controller/user')


router.post('/login', U.login)
module.exports = router

