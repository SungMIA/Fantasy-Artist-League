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
        
        firebase 
        .auth()
        .createUserWithEmailAndPassword(mail, pass)
        .then((user) => {
            if(user){ 
                db.collection("users").doc(user.uid).set({
                    first: firstN,
                    last: lastN,
                    username: userN,
                });
            }
        }).catch((error) => {
            var errorCord = error.code;
            var errorMessage = error.message;
        });
    }), true;


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
});