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
        let uid = null;
        
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        //
        // RIGHT HERE:
        // 
        // .doc(uid).set(...) is ideal, so we can reference the correct user id
        // But, when I have: firebase.auth().currentUser.uid before the firestore line,
        // it says currentUser is null. 
        // I want to: run the firestore line AFTER createUserWith... successfully terminates
        // Think i just have to use callback function 
        firebase.firestore().collection("users").doc().set({
            first: firstN,
            last: lastN,
            username: userN,
        });
            // let user = userCreds.user;
            // if(user){ 
            //     firebase.database().collection("users").doc(user.uid).set({
            //         first: firstN,
            //         last: lastN,
            //         username: userN,
            //     });
            // }
    }, true);


<<<<<<< HEAD
    // firebase.auth().onAuthStateChanged(firebaseUser => {
    //     if (firebaseUser) {
    //         let popMessage = '<span class="has-text-successful">You have successfully logged in with '+firebaseUser.email+'</span>,'
    //                         '<div>Start browsing different artists from Spotify and add it to your collection! <a class="button start" href="./userpage.html"> Lets Go!';
    //         document.html(popMessage);
    //     } else {
    //         let fail = '<span class="has-text-danger">You have not logged in successfully.</span>';
    //         document.html(fail);
    //     }
    // })
=======
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
>>>>>>> 9d2a12ad54da61689865da6b8cd317d9c7b5cbaa
});