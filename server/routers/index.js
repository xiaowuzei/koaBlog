const Router = require('koa-router');
const router = new Router({
  prefix: '/api'
});
const U = require('../controller/user')
const A =require('../controller/article')
const T=require('../controller/tag')

router.post('/login', U.login)
router.post('/articles',A.createArticle)
router.post('/tag',T.createTag)
router.get('/tag',T.getTag)
router.delete('/tag/:id',T.deleteTag)
router.patch('/tag/:id', T.editTag)                                //修改单个标签

module.exports = router

