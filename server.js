var express = require('express');//includes modules core module
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-Parser');

//user model
var usersController = require('./controllers/users');  //user created module
var app = express();//creates express server

app.set('views',path.join(__dirname,'views'));

app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended:false
    }));

app.use(express.static('public'));  //access static folder


//routes
app.get('/',function(request,response){
    //console.log(users.getUsers());
    response.render('index',{
        title:"Home",
        users:usersController.getUsers
});
});

app.get('/users/:id',
        function(request,response){
        var user = usersController.getUser(request.params.id);
    //console.log(users.getUsers());
    response.render('profile',{
        title:"User Profile",
        user:user
});
});

app.get('/login',function(request,response){
    response.render('login',{
                    title:"Log In"});
});

app.get('/signup',function(request,response){
    response.render('signup',{ title:"Sign Up"});
});

app.get('/aboutus',function(request,response){
    response.render('aboutus',{ title:"about us"});
});

// app.get('/layout',function(request,response){
//    response.sendfile('./views/layout.html');
//  });           HAD DONE PREVIOUSLY BEFORE ADDING LAYOUT.HTML

app.post('/login',usersController.postLogin);

    


app.listen(3000); //for express server