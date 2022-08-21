// const mongoose=require('mongoose')
// const productSchema=mongoose.Schema({
//     product_name:String,
//     product_img:String,
//     product_price:Number,
//     product_stock:Number,
//     product_mack:String,
//     product_rating:Number 
// })
// module.exports=mongoose.model('product',productSchema)
const mongoose = require("mongoose")

const {Schema} = mongoose

const productSchema = new Schema({
    product_name:String,
    product_img:String,
    product_price:Number,
    product_language:String,
    product_duration:String,
    product_rating:Number 
})

module.exports=mongoose.model('Product',productSchema)