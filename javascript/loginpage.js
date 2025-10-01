function validateForm(){
   var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;


 const items={}
 items.Name=username;
 items.Password=password;

 console.log(items)
 if(username===password){
   alert("login successfully")
 }

 if(password===confirmPassword){
    alert("login successfully")
 }
 else{
    alert("password incorrect")
 }
}