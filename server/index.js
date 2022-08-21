const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
const methodoverride=require('method-override')
const app=express()
//mongo db env varib set mongodburl  
const url=process.env.mongodburl || 'mongodb+srv://owndb:VInxk9KEBPe3RMcU@cluster0.ncpvelk.mongodb.net/ekart'
// if (url=='' || url==null ){
//     this.url='mongodb+srv://owndb:VInxk9KEBPe3RMcU@cluster0.ncpvelk.mongodb.net/test';
// }
mongoose.connect(url)
//statu of mongodb connection 
mongoose.connection.on('connected',()=>console.log(`👍 mongo db is connect  on server ${url}  ` ))
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(`👎 mongo db is throw${err} 💀` )
    }
})
// use cors
app.use(cors())
app.use(methodoverride('_method')) 
// use body-parser set json
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
//add my rout file
// app.use('/apis',route);
app.use('/api',require('./routes/route'))
//sattic file
app.use(express.static(path.join(__dirname,'public')))
//test api
app.get('/',(req,res)=>{
    res.send(`crud mongo api is running on port ${port}...`)
})
//rest of addres
app.get("*",(req,res)=>{
   
    res.send("Not Found")
})
//PORT set
const port=process.env.PORT ||4000;
app.listen( port ,()=>console.log(`server is running on port ${port}`));



 