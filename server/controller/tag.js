const Tag = require('../models/tag')

const createTag = async ctx => {
  //  先去数据库查有木有这个标签
  const name = ctx.request.body.name;
  let res = await Tag.findOne({
    name
  }).exec().catch(err => {
    ctx.throw(500, '服务器内部错误-fingOneTag错误!');
  });
  console.log(res)
  if (res !== null) {
    // 不return下面的cox.body会执行滴，会覆盖这一条滴
    return ctx.body = {
      msg: '这是已经存在的标签'
    }
  }
  tag = new Tag({
    name
  })
  let result = await tag.save().catch(err => {
    ctx.throw(500, '服务器内部错误-createTag错误!');
  });
  ctx.body = {
    data:result,
    msg: '创建标签成功'
  }
}

const getTag = async ctx => {
  let res = await Tag.find()
  ctx.body = {
    data: res,
    msg: '获取所有标签成功'
  }
}
const deleteTag = async ctx => {
  const id = ctx.params.id;
  const res = await Tag.findByIdAndRemove(id)
  ctx.body = {
    msg: '删除成功',
    data: res,
  }
}

const editTag = async ctx => {
  const id = ctx.params.id;
  const name = ctx.request.body.name;
  let result = await Tag
    .findByIdAndUpdate(id, {
      name
    }, {
      new: true //返回新的已修改的信息
    })
    .exec()
    .catch(err => {
      ctx.throw(500, '服务器内部错误-modifyTag错误!');
    });
  console.log(result)
  ctx.body = {
    msg: '修改标签成功!',
    data: result
  };
}

module.exports = {
  createTag,
  getTag,
  deleteTag,
  editTag
}
