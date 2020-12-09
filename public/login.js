$(function() {

    let useremail = document.getElementById("email");
    let password = document.getElementById("password");
    let loginButton = document.getElementById("login");
    
    loginButton.addEventListener("click", event => {
        let mail = useremail.value;
        let pass = password.value;
        
    function signin() {
        firebase.auth().signInWithEmailAndPassword(mail, pass);
    }

    function get() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection("users").doc(user.uid).get().then(function(doc) {
                    if (doc.exists) {
                        location.href = "/userAccount.html";
                    } 
                }).catch(function(error) {
                    // alert stopped working
                    // alert("Error: Incorrect Email or Password");
                    $('#message').append('<h3>Incorrect Email or Password</h3>');
                })
            }
        });
    }
    $.when(signin()).then(get())
    // $.signin().get()

    }, true);
});