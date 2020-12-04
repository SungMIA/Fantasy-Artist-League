$(function() {

    let message = $('#message');
    message.html('');

    let firstName= document.getElementById("first");
    let lastName = document.getElementById("last");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let signupButton = document.getElementById("signup");
    
    signupButton.addEventListener("click", event => {
        let firstN = firstName.value;
        let lastN = lastName.value;
        let mail = email.value;
        let pass = password.value;
        
        let auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(mail, pass);
        promise.catch(error => message.html('<span class="has-text-danger">'+error.message+'</span>'));
    });

    // realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            firebase.firestore().collection("users").doc(firebaseUser.uid).set({
                email: mail,
                first: firstN,
                last: lastN,
                password: pass
            });
        } else {
        }
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            window.location.href = "index.html"; //change 
            // add logout button
        } else {
            message.html('<span class="has-text-danger">You did not sign up successfully.</span>');
            btnLogout.classList.add('hide');
        }
    })
});