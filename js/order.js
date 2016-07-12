function submit() {
    window.location = "submit.html"; // Redirecting to other page.
}

function loadUsers() {
    //return fetch('./data/users.json')
    return fetch('http://localhost:8080/students')
        .then(function(response) {
            return response.json();
        });
}