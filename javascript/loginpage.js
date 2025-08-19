function validateForm(){
   var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
 var confirmPassword=document.getElementById("confirmpassword").value;

 const items={}
 items.Name=username;
 items.Password=password;
 items.confirmpassword=confirmPassword;
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