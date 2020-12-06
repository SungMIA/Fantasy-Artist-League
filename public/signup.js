$(function() {

    let message = $('#message');
    message.html('');

    let firstName= document.getElementById("first");
    let lastName = document.getElementById("last");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let signupButton = document.getElementById("signup");
    
    signupButton.addEventListener("click", event => {
        let firstN = firstName.value;
        let lastN = lastName.value;
        let userN = username.value;
        let mail = email.value;
        let pass = password.value;
        
        firebase 
        .auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then((user) => {
            // if(user){ 
            //     db.collection("users").doc(user.uid).set({
            //         first: firstN,
            //         last: lastN,
            //         username: userN,
            //     });
            // }
            window.location.href = 'index.html';
        })
        .catch((error) => {
            var errorCord = error.code;
            var errorMessage = error.message;
        });
    }), true;


        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                users.doc(firebaseUser.currentUser.uid).get().then(function (doc) {
                    if (!doc.exists){
                        users.doc(firebaseUser.uid).set({
                            email: mail,
                            first: firstN,
                            last: lastN,
                            username: userN
                        }).then(function () {
                            window.location.href = 'index.html';
                        }).catch(error => console.log(error.message));
                    } else {
                        window.location.href = 'index.html';
                    }
                })
            } 
        });
    // }), true;
});