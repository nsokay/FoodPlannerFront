/*function loadUsers() {

    $.ajax({
        type: "POST",
        url:  "localhost:8080/users",
        data: {"email": username, "password" : password},
        success: function success(data) {
            console.log(data);
            document.location = "";
        },
        dataType: dataType
    });
}*/

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    console.log(username);
    console.log(password);
    window.location = "meals.html"; // Redirecting to other page.
    /*    $.ajax({
     type: 'POST',
     url: 'localhost:8000/users/validateUser',
     data: {
     email: username,
     password: password
     },
     success: function (data) {
     console.log(data);
     }
     });

   /fetch('http://localhost:8080/users/validateUser', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        method: 'POST',

        body: JSON.stringify({
            email: username,
            password: password
        })

    }).then(function (result) {
        console.log(result);

        var userList = document.querySelector(".user-list");
        document.body.removeChild(userList.parentNode)
        drawUserList();

    });


        if (username == "a" && password == "p") {
     alert("Login successfully");

     return false;
     }

     else {
     attempt--;// Decrementing by one.
     alert("You have left " + attempt + " attempt;");
     // Disabling fields after 3 attempts.
     if (attempt == 0) {
     document.getElementById("username").disabled = true;
     document.getElementById("password").disabled = true;
     document.getElementById("submit").disabled = true;
     return false;
     }
     }
 */
}
