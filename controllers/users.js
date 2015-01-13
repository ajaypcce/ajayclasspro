var userModel=require('../models/Users');    // .. to go back

exports.getUsers = function(){  //export allows data outside
    return userModel.users;  //for users in model folder
}



exports.getUser = function(id){
    for(var i=0;i<userModel.users.length;i++){
        if(userModel.users[i].id == id)
        return userModel.users[i];
}
}

exports.compareAuth= function(username,password) {
for(var i=0;i<userModel.users.length;i++)
{ if(userModel.users[i].username == username && userModel.users[i].password == password)
{ 
    return userModel.users[i];
    //return true;
}
 }
    return false;
}

exports.postLogin=function(request,response){ 
    console.log(request.body.email);          //request.body -- all elements
    console.log(request.body.password);
    
    var result=compareAuth(request.body.email,request.body.password);
   if(result)
      {
      response.send("Login Successful.Hi "+result.name);  //result gets all data from JSON only name is used
}
         else
         { response.send("failed");
 }
}