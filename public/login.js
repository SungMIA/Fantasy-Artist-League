$(function() {

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let loginButton = document.getElementById("login");
    
    loginButton.addEventListener("click", event => {
        let mail = email.value;
        let pass = password.value;
        
        firebase 
        .auth()
        .signInWithEmailAndPassword(mail, pass)
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
    // }), true;


        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                // signed in
            } else {
                // not signed in
            }
        });
    }), true;
});