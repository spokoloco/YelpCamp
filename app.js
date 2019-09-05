var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name:"Fun Camp", image: "https://photosforclass.com/download/pixabay-984020?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f72297bd09548c1_960.jpg&user=Free-Photos"},
        {name:"Haunted National Park", image: "https://photosforclass.com/download/pixabay-1208201?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c73287dd4934fc05c_960.jpg&user=Free-Photos"},
        {name:"Happy Hills", image: "https://photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c73287dd4934fc05c_960.jpg&user=Pexels"},
        {name:"Creeky Creek", image: "https://photosforclass.com/download/pixabay-1189929?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c73287dd4934fc05c_960.jpg&user=Noel_Bauza"},
        {name:"Dry Lake", image: "https://photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c73287dd4934fc05c_960.jpg&user=Free-Photos"}
    ]

    res.render("campgrounds", {campgrounds:campgrounds});
});



app.listen("3000", "", function() {
    console.log("The server has started");
})