const express=require('express')
const path=require('path')
const port=80
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')
app.set('views',express.static(path.join(__dirname,'views')))
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/list',(req,res)=>{
    res.render('listing')
})
app.get('/playground',(req,res)=>{
    res.render('playground')
})
app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.listen(port,(err,result)=>{
    if(err){
        console.error('error occur',err)
    }
    else{
        console.log(`server start on port ${port}`)
    }
})
