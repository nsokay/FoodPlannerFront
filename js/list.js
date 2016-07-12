function loadUsers() {
    //return fetch('./data/users.json')
    return fetch('http://localhost:8080/students')
        .then(function(response) {
            return response.json();
        });
}

function drawUserList() {
    loadUsers().then(function(users) {
        var userListTemplate = Handlebars.compile(document.querySelector('#user-list').innerHTML);
        var userTemplate = Handlebars.compile(document.querySelector('#user').innerHTML);

        var userList = '';
        users.forEach(function(user) {
            userList += userTemplate(user);
        });

        var userList = userListTemplate({
            body: userList
        });

        var userListContainer = document.createElement('div');
        userListContainer.innerHTML = userList;
        document.body.appendChild(userListContainer);
    });
}

function removeElement(event, id){
    console.log(id);
    fetch('http://localhost:8080/students/'+id, {
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
    method: "DELETE"})
    .then(function() {
            var userList = document.querySelector(".user-list");
            document.body.removeChild(userList.parentNode)
            drawUserList();

    });
    event.preventDefault();
}

function handleSubmit(event){
    console.log(document.user);
    console.log(document.user.firstName.value);
    console.log(document.user.lastName.value);

    var form = new FormData(document.user);
    fetch('http://localhost:8080/students', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",

        body: JSON.stringify({
            firstName: document.user.firstName.value,
            lastName: document.user.lastName.value
        })

    })
        .then(function() {
            var userList = document.querySelector(".user-list");
                document.body.removeChild(userList.parentNode)
            drawUserList();
        });

    event.preventDefault();
}

drawUserList();