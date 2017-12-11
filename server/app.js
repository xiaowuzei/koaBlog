const koa = require('koa');
const app = new koa();

//bodyParser中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const mongoose = require('mongoose');
//连接mongoose，连接前先启动mongod --storageEngine mmapv1 --dbpath F:\koablog
mongoose.connect('mongodb://localhost/koablog');
const db = mongoose.connection;
db.on('error', () => {
  console.log('数据库连接出错')
})
db.once('open', () => {
  console.log('数据库连接成功')
})

const router=require('./routers');
app
.use(router.routes())
.use(router.allowedMethods());


app.listen('3333', () => {
  console.log('listening 3333........')
});
