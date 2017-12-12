const Article = require('../models/article')

const createArticle = async ctx => {

  let article = new Article(ctx.request.body)
  let res = await article.save().catch((err) => {
    ctx.throw(500, '服务器内部错误')
  })
  ctx.body = 'helllo'
}
module.exports = {
  createArticle
}
