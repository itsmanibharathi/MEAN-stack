const bodyParser = require('body-parser');
const express=require('express');
const router=express.Router();
const product=require('../models/product')
//connection test of rout
router.get('/',(req,res)=>{
    res.send('rout api also conneted...')
}) 
//operation
router.get('/product',(req,res)=>{
    product.find(function(err,data){
        res.json(data )
    })  
}) 
router.post('/product',(req,res)=>{ 
    let newproduct =new product({
        product_name:req.body.name,
        product_img:req.body.img,
        product_price:req.body.price,
        product_language:req.body.lang,
        product_duration:req.body.duration,
        product_rating:req.body.rating 
    })
    console.log('save '+JSON.stringify(req.body))
    newproduct.save((err,rep)=>{
        if (err){
            res.json({meg:"fail to insert"})
        }
        else{
            res.json({meg:"document inseted "+req.body.name })
        }     
    });
})
 router.delete('/product/:id',async(req,res)=>{
    console.log("delete")
    product.remove({_id: req.params.id},function(err,rep){
        if(err){
            console.log(err)
        }
        else{   
            console.log(`${req.params.id} deleted successful !!`)
            res.end()
        }
    })
}) 
module.exports=router