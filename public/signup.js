// const { db } = require("../backend/firebase");

$(function() {
    let firstName= document.getElementById("first");
    let lastName = document.getElementById("last");
    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let signupButton = document.getElementById("signup");
    
    signupButton.addEventListener("click", event => {
        let firstN = firstName.value;
        let lastN = lastName.value;
        let userN = userName.value;
        let mail = email.value;
        let pass = password.value;
        function create() {
            firebase.auth().createUserWithEmailAndPassword(mail, pass)
        }
        function store() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    firebase.firestore().collection("users").doc(user.uid).set({
                        first: firstN,
                        last: lastN,
                        username: userN,
                    });
                }
            })
        }
        $.when(create()).then(store())
        //
        // RIGHT HERE:
        // 
        // .doc(uid).set(...) is ideal, so we can reference the correct user id
        // But, when I have: firebase.auth().currentUser.uid before the firestore line,
        // it says currentUser is null. 
        // I want to: run the firestore line AFTER createUserWith... successfully terminates
        // Think i just have to use callback function 
        
            // let user = userCreds.user;
            // if(user){ 
            //     firebase.database().collection("users").doc(user.uid).set({
            //         first: firstN,
            //         last: lastN,
            //         username: userN,
            //     });
            // }
    }, true);


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {

        } else {
            let fail = '<span class="has-text-danger">You have not logged in successfully.</span>';
        }
    })
});