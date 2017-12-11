const get = ctx => {
  console.log(ctx.query)
  ctx.body = 'helloget'
}
const post = ctx => {
  console.log(ctx.request.body)
  ctx.body = 'hellopost'
}

module.exports = {
  get,
  post
}
