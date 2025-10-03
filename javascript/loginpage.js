function login() {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      let message = document.getElementById("message");

      let correctUser = "admin";
      let correctPass = "12345";

      if (username === correctUser && password === correctPass) {
        message.style.color = "green";
        message.textContent = "Login Successful ";
        alert(loginsuccessfull)
      } else {
        message.style.color = "red";
        message.textContent = "Invalid Username or Password ";
        alert(loginfailed)
      }
    }