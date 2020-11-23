
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

export const handleSubmitSignUp = async function(event) {
    event.preventDefault();
    let user = event.target.value;
    // let userObj = {
    //     first = user.first,
    //     last: user.last,
    //     username: user.username,
    //     email: user.email,
    //     password: user.password
    // }
    // let userObjString = JSON.stringify(userObj);

    console.log(user)

    const createUser = await $.ajax({
        method: 'post',
        url: 'http://localhost:3040/user',
        data: {
            first: user.first,
            last: user.last,
            username: user.username,
            email: user.email,
            password: user.password
            // o: userObjString
        },
        responseType: 'json'
    });
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