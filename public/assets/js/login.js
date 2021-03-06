$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var userName = $("input#userName");
  var password = $("input#password");
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function () {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      username: loginForm[0].userName.value,
      password: loginForm[0].password.value
    };
    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    userName.val("");
    password.val("");
  });
});