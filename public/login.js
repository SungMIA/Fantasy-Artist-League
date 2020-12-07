$(function() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loginButton = document.getElementById("login");
    
    loginButton.addEventListener("click", event => {
        let mail = email.value;
        let pass = password.value;
        
    firebase.auth().signInWithEmailAndPassword(mail, pass)
        .then((user) => {
            // if(user){ 
            //     db.collection("users").doc(user.uid).set({
            //         first: firstN,
            //         last: lastN,
            //         username: userN,
            //     });
            // }
            window.location.href = 'userAccount.html';
        });
    // }), true;

    }), true;
});