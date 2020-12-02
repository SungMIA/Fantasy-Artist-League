import { auth } from 'google-auth-library';

const {admin, db, firebase, users} = require('./backend/firebase');

export const signUpDisplay = function() {
    let signUp = $('<div class = "signup"><h1>Sign Up</h1>');
    let form = $('<div id="signupForm">');
    let content =  $('<form></form>');

    let first = '<h1>First Name</h1><input id="first" type="text" placeholder="Your First Name" required>';
    let last = '<h1>Last Name</h1><input id="last" type="text" placeholder="Your Last Name" required>';
    let email = '<h1>Email</h1><input id = "email" type="text" placeholder="123@gmail.com" required>';
    let username = '<h1>Username</h1><input id= "username" type="text" placeholder="user123" required>';
    let password = '<h1>Password</h1><input id = "password" type="password" placeholder="123" required>';
    $(content).append(first, last, email, username, password);

    let submit = '<button id="signupbutton" class ="button" type = "submit">Sign Up</button>';
    $(content).append(submit);

    $(signUp).append(form);
    $(form).append(content);

    return signUp;
}

export const header = function() {
    let header = $('<div class="header">');
    let name = '<h1 class="appName">APP NAME</h1>';
    $(header).append(name);
    return header;
}

export const handleSubmitSignUp = function() {
    let firstName= document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase 
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            return users.doc(user.uid).set({
                first: firstName,
                last: lastName,
                username: userName,
            });
        }).then(() => {
            let form = document.getElementById("")
        })
    

}

export const renderMainPage = function() {
    let root = $('#root');
    
}


export const loadSignUpIntoDOM = function() {
    const root = $('#root');
    root.append(header());
    root.append(signUpDisplay());

    $('#signupbutton').on('click', function(event) {
        handleSubmitSignUp(event);
    });
}


$(function() {
    loadSignUpIntoDOM();
});