const Express = require("express")

const app = Express()

const bodyParser = require("body-parser")

const request = require("request")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){
    console.log(req.body)
})


app.listen(5000,function(){
    console.log("server started")
})





// 7a1ae22f996cd376961024fae92756c9-us21