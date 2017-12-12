const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const U = require('../controller/user')
const A =require('../controller/article')


router.post('/login', U.login)
router.post('/articles',A.createArticle)
module.exports = router

