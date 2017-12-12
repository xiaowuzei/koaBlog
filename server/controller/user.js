const User = require('../models/user')
const login = async ctx => {
  const {
    username,
    password
  } = ctx.request.body
  if (!username) {
    ctx.throw(400, '用户名不能为空!');
  }
  if (!password) {
    ctx.throw(400, '密码不能为空!');
  }
  let res = await User.findOne({
      username
    }).exec()
    .catch(err => {
      ctx.throw(500, '服务器内部错误-findUser错误！');
    });
  if (res) {
    if (password === res.password) {
      ctx.body ={
        msg:'登录成功',
        status:1
      }
    } else {
      ctx.body = '密码错误'
    }
  } else {
    ctx.body = '用户名不存在'
  }

}

module.exports = {
  login
}
