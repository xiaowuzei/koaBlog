const mongoose=require('mongoose')
const articleShema=mongoose.Schema({
    title:String,
    content:String,
    create_time:{
       type:Date,
       default:new Date()
    }
})

module.exports=mongoose.model('article',articleShema)