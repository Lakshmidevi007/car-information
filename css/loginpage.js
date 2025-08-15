const demoUser={
    username:"admin"
    password:"1234"
};

document.getElementById("loginform").addEventListener("submit",function(e){
    e.preventDefault();
const username=document.getElementById("username").value.trim();

const password=document.getElementById("password").value.trim();
const errormsg=document.getElementById("errormsg");

if(username=== demoUser.username && password===demoUser.password){

}
else{
    errormsg.textContent="Invalid uesrname or password";
}


});