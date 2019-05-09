var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var camps = [{name:"Harmoine Tent",img:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
              {name:"Wolf Knight Room",img:"https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
              {name:"Harmoine Tent",img:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
              {name:"Wolf Knight Room",img:"https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"},
              {name:"Harmoine Tent",img:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
              {name:"Wolf Knight Room",img:"https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg"}];
              
app.get("/", function(req, res){
    res.render("landing");
})

app.get("/camps", function(req, res){
   
    res.render("camps",{varCamps:camps});
});

app.get("/camps/new", function(req, res){
    res.render("newCamp");
});

app.post("/camps", function(req, res){
    var name = req.body.name;
    var img = req.body.img;
    var newCamp = {name:name,img:img}; 
    camps.push(newCamp);
    res.redirect("camps");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp v1 Server has been started....");
});