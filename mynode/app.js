var express = require('express');
var app = express();

app.get("/",function(req,resp)
{
    resp.send("Today is our exam");
})
app.get("/login",function(req,resp)
{
    resp.send("we have passed");
})

app.listen(7000);
console.log("Server has started....")